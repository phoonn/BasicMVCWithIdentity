﻿$("#changeToUser").click(function () {
    var roleID = $(this).attr("value");
    var userName = document.getElementById("heading").innerHTML;
    $.ajax({
        type: "post",
        url: '/User/ChangeRole',
        data: {
            role: roleID,
            userName: userName
        },
        ajaxasync: true,
        success: function () {
            window.location.href = "Details?userName=" + userName;
        },
        error: function () {
        }
    });
});

$("#changeToAdministrator").click(function () {
    var roleID = $(this).attr("value");
    var userName = document.getElementById("heading").innerHTML;
    $.ajax({
        type: "post",
        url: '/User/ChangeRole',
        data: {
            role: roleID,
            userName: userName
        },
        ajaxasync: true,
        success: function () {
            window.location.href = "Details?userName=" + userName;
        },
        error: function () {
        }
    });
});

$("#changeToModerator").click(function () {
    var roleID = $(this).attr("value");
    var userName = document.getElementById("heading").innerHTML;
    $.ajax({
        type: "post",
        url: '/User/ChangeRole',
        data: {
            role: roleID,
            userName: userName
        },
        ajaxasync: true,
        success: function () {
            window.location.href = "Details?userName=" + userName;
        },
        error: function () {
        }
    });
});

$("#changeToLocked").click(function () {
    var state = $(this).attr("value");
    var userName = document.getElementById("heading").innerHTML;
    $.ajax({
        type: "post",
        url: '/User/ChangeState',
        data: {
            state: state,
            userName: userName
        },
        ajaxasync: true,
        success: function () {
            window.location.href = "Details?userName=" + userName;
        },
        error: function () {
        }
    });
    location.reload();
});

$("#changeToActive").click(function () {
    var state = $(this).attr("value");
    var userName = document.getElementById("heading").innerHTML;
    $.ajax({
        type: "post",
        url: '/User/ChangeState',
        data: {
            state: state,
            userName: userName
        },
        ajaxasync: true,
        success: function () {
            window.location.href = "Details?userName=" + userName;
        },
        error: function () {
        }
    });
    location.reload();
});

$("#deleteButton").click(function () {
    if (!confirm("Are you sure you want to delete?")) {
        return false;
    }

    var userName = $(this).attr("value");
    $.ajax({
        type: "post",
        url: '/User/Delete',
        data: { userName: userName },
        ajaxasync: true,
        success: function () {
            location.href = "/User";
        },
        error: function () {
            alert("failed");
        }
    });
});