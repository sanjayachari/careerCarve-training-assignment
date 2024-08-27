Theory question answers are in perticular file which related to question.

implement with commenting the explaination. 


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,         -- Integer
    name VARCHAR(100) NOT NULL,                -- Variable-length string
    birthdate DATE,                            -- Date
    salary DECIMAL(10, 2),                     -- Decimal
    hired_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date and time
    is_active BOOLEAN DEFAULT TRUE             -- Boolean
);
