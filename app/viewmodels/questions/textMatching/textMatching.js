﻿define(['viewmodels/questions/textMatching/textMatchingSource', 'viewmodels/questions/textMatching/textMatchingTarget'], function (Source, Target) {

    var viewModel = {
        question: null,
        content: null,
        isAnswered: ko.observable(false),

        values: [],

        sources: ko.observableArray([]),
        targets: ko.observableArray([]),

        submit: submit,

        initialize: initialize
    };

    viewModel.acceptValue = function (value) {
        viewModel.targets.push(value);
    };


    viewModel.rejectValue = function (value) {
        viewModel.targets.remove(value);
    };

    return viewModel;

    function initialize(question) {

        return Q.fcall(function () {
            viewModel.question = question;

            viewModel.content = question.content;
            viewModel.isAnswered(question.isAnswered);

            viewModel.values = _.chain(question.answers)
                .map(function (answer) {
                    return answer.value;
                })
                .shuffle()
                .value();

            var targets = [];

            _.each(viewModel.values, function (value) {
                targets.push(new Target(value));
            });

            var sources = [];
            _.each(question.answers, function (pair) {
                var source = new Source(pair.id, pair.key);
                var target = _.find(targets, function (target) {
                    return target.value() == pair.attemptedValue;
                });

                if (target) {
                    source.acceptValue(target.value());
                    target.rejectValue();
                } else {
                    source.value(null);
                }

                sources.push(source);
            });

            viewModel.targets(targets);
            viewModel.sources(_.shuffle(sources));
        });
    }

    function submit() {
        return Q.fcall(function () {
            viewModel.question.submitAnswer(_.map(viewModel.sources(), function (source) {
                var value = source.value() ? source.value() : null;
                return { id: source.id, value: value };
            }));
            viewModel.isAnswered(true);
        });
    }
});