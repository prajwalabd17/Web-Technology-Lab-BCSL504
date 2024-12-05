<?php
// File to store the visitor count
$visitorCountFile = 'visitor_count.txt';

// Check if the file exists, if not create it and initialize the count
if (!file_exists($visitorCountFile)) {
    file_put_contents($visitorCountFile, 0);
}

// Read the current count from the file
$count = (int)file_get_contents($visitorCountFile);

// Increment the count
$count++;

// Write the new count back to the file
file_put_contents($visitorCountFile, $count);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Visitor Count</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Website!</h1>
        <h2>Visitor Count: <?php echo $count; ?></h2>
    </div>
</body>
</html>