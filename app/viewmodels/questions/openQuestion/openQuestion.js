define([], function () {
    "use strict";

    var viewModel = {
        question: null,
        content: null,
        answeredText: ko.observable(''),
        isAnswered: ko.observable(false),
        feedbackView: ko.observable(''),

        initialize: initialize,
        submit: submit,
    };
    return viewModel;

    function initialize(question) {
        return Q.fcall(function () {
            viewModel.question = question;
            viewModel.content = question.content;
            viewModel.answeredText(question.answeredText);
            viewModel.isAnswered(question.isAnswered);
            viewModel.feedbackView('questions/openQuestion/feedback.html');
        });
    }

    function submit() {
        return Q.fcall(function () {
            viewModel.question.submitAnswer(viewModel.answeredText().trim());
            viewModel.isAnswered(true);
        });
    }
});