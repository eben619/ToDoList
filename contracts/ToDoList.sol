// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ToDoList {
    struct Activity {
        address user;
        string description;
        bool isDone;
    }

    Activity[] private activities;

    event ActivityCreated(address indexed user, uint256 indexed activityIndex, string description);
    event ActivityDeleted(address indexed user, uint256 indexed activityIndex);
    event ActivityMarkedAsDone(address indexed user, uint256 indexed activityIndex);

    function createActivity(string memory _description) public {
        activities.push(Activity(msg.sender, _description, false));
        uint256 activityIndex = activities.length - 1;
        emit ActivityCreated(msg.sender, activityIndex, _description);
    }

    function deleteActivity(uint256 _activityIndex) public {
        require(_activityIndex < activities.length, "Activity cannot be found");
        require(activities[_activityIndex].user == msg.sender, "You do not have permission to delete this activity");

        for (uint256 i = _activityIndex; i < activities.length - 1; i++) {
            activities[i] = activities[i + 1];
        }
        activities.pop();
        emit ActivityDeleted(msg.sender, _activityIndex);
    }

    function markActivityAsDone(uint256 _activityIndex) public {
        require(_activityIndex < activities.length, "Activity cannot be found");
        require(activities[_activityIndex].user == msg.sender, "You do not have permission to delete this activity");

        activities[_activityIndex].isDone = true;
        emit ActivityMarkedAsDone(msg.sender, _activityIndex);
    }

    function getActivityCount() public view returns (uint256) {
        return activities.length;
    }

    function getActivity(uint256 _activityIndex) public view returns (string memory description, bool isDone) {
        require(_activityIndex < activities.length, "Activity cannot be found");
        Activity memory activity = activities[_activityIndex];
        return (activity.description, activity.isDone);
    }
}