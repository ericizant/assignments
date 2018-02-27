const express = require('express');
const issuesRouter = express.Router();
const issue = require('../models/issues.js');

issuesRouter.route('/')
    .get((req, res) => {
        issue.find((err, foundIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIssue);
            }
        })
    })
    .post((req, res) => {
        let newIssue = new issue(req.body);
        newIssue.save(req.body, (err, savedIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedIssue);
            }
        })
    })

issuesRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params.id;
        issue.findById({ _id: id }, (err, foundIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIssue);
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params;
        issue.findByIdAndRemove(id, (err, removedIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedIssue);
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params;
        issue.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedIssue) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedIssue);
            }
        })
    })

module.exports = issuesRouter;