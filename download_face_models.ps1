$ErrorActionPreference = "Stop"

# Run this script from your Anniversary project folder.
# It downloads the real face-api.js model files into .\models

$modelsDir = Join-Path (Get-Location) "models"

New-Item -ItemType Directory -Force -Path $modelsDir | Out-Null

$base = "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights"

$files = @(
    "tiny_face_detector_model-weights_manifest.json",
    "tiny_face_detector_model-shard1",
    "face_landmark_68_model-weights_manifest.json",
    "face_landmark_68_model-shard1",
    "face_recognition_model-weights_manifest.json",
    "face_recognition_model-shard1",
    "face_recognition_model-shard2"
)

Write-Host ""
Write-Host "Downloading face-api.js model files..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $files) {
    $url = "$base/$file"
    $dest = Join-Path $modelsDir $file

    Write-Host "Downloading $file ..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $url -OutFile $dest
}

Write-Host ""
Write-Host "Checking downloaded file sizes..." -ForegroundColor Cyan
Write-Host ""

$ok = $true

foreach ($file in $files) {
    $path = Join-Path $modelsDir $file

    if (-not (Test-Path $path)) {
        Write-Host "MISSING: $file" -ForegroundColor Red
        $ok = $false
        continue
    }

    $size = (Get-Item $path).Length
    Write-Host ("{0}  {1:N0} bytes" -f $file, $size)

    if ($size -le 0) {
        Write-Host "EMPTY: $file" -ForegroundColor Red
        $ok = $false
    }
}

Write-Host ""

if ($ok) {
    Write-Host "SUCCESS! Real model files are now in .\models" -ForegroundColor Green
    Write-Host "You can now run the site with Live Server and test Door 3."
} else {
    Write-Host "Something went wrong. Do not delete anything yet; send me this PowerShell output." -ForegroundColor Red
}

Write-Host ""
Pause
