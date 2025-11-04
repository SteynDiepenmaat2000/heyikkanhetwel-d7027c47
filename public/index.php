<?php
// Set correct MIME types before serving content
header('X-Content-Type-Options: nosniff');

// Read and output the index.html
$html = file_get_contents(__DIR__ . '/index.html');

// Replace asset paths to go through asset.php
$html = preg_replace(
    '/(src|href)="\/assets\/(.*?\.(js|mjs|css))"/i',
    '$1="/asset.php?file=assets/$2"',
    $html
);

echo $html;
