<?php
// Simple asset server to bypass nginx MIME type issues
// Serves JS, CSS, and other static files with correct Content-Type headers

$file = $_GET['file'] ?? '';

// Security: prevent directory traversal
$file = str_replace(['../', '..\\'], '', $file);

// Determine the real file path
$filePath = __DIR__ . '/' . $file;

// Check if file exists
if (!file_exists($filePath) || !is_file($filePath)) {
    header('HTTP/1.0 404 Not Found');
    exit('File not found');
}

// Get file extension and set appropriate MIME type
$extension = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));

$mimeTypes = [
    'js' => 'text/javascript',
    'mjs' => 'text/javascript',
    'css' => 'text/css',
    'json' => 'application/json',
    'svg' => 'image/svg+xml',
    'wasm' => 'application/wasm',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'gif' => 'image/gif',
    'ico' => 'image/x-icon',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'eot' => 'application/vnd.ms-fontobject',
];

$contentType = $mimeTypes[$extension] ?? 'application/octet-stream';

// Set headers
header('Content-Type: ' . $contentType);
header('Content-Length: ' . filesize($filePath));
header('Cache-Control: public, max-age=31536000'); // Cache for 1 year

// Output file
readfile($filePath);
exit;
