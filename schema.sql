CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes(title, contents)
VALUES ("Go To Gym", "A note about workout"),
("Film a video", "A note about youtube video");
