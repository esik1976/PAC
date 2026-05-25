$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$landingRoot = Join-Path $projectRoot "src\web\landing"

if (-not (Test-Path $landingRoot)) {
  throw "Landing directory not found: $landingRoot"
}

Set-Location $landingRoot
py -m http.server 4173 --bind 127.0.0.1
