$YourDirToCompress="."
$ZipFileResult="package.zip"
$DirToExclude=@($ZipFileResult, ".git", "images", "package.ps1", "webstore", ".gitignore")

Get-ChildItem $YourDirToCompress  | 
           where { $_.Name -notin $DirToExclude} | 
              Compress-Archive -DestinationPath $ZipFileResult -Update