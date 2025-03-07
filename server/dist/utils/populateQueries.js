"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagePopulateQuery = exports.chatPopulateQuery = void 0;
const chatPopulateQuery = [
    {
        path: "users",
        select: "-password",
    },
    {
        path: "mutedBy",
        select: "-password",
    },
    {
        path: "archivedBy",
        select: "-password",
    },
    {
        path: "pinnedBy",
        select: "-password",
    },
    { path: "latestMessage" },
    // { path: "latestMessage", options: { sort: [{ createdAt: 1 }] } },
];
exports.chatPopulateQuery = chatPopulateQuery;
const messagePopulateQuery = [
    {
        path: "sender",
        select: "-password",
    },
];
exports.messagePopulateQuery = messagePopulateQuery;
