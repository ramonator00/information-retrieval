CREATE TABLE RECIPES
(
    ID           INTEGER PRIMARY KEY NOT NULL,
    TITLE        TEXT                NOT NULL,
    INSTRUCTIONS TEXT                NOT NULL,
    INGREDIENTS  TEXT                NOT NULL,
    R_DATE       DATE,
    LANGUAGE     INTEGER             NOT NULL
)