Add-Type -AssemblyName System.Drawing

$publicDir = "c:\Users\Hizkia Ariel Wijono\.gemini\antigravity\benchcode dev\senweida\public"
$imagesDir = "$publicDir\images"
New-Item -ItemType Directory -Force -Path $publicDir | Out-Null
New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null

# 1. GENERATE LOGO (512x512 PNG)
# Circular badge, deep green (#14301F) with a gold tree emblem (#B8924A), Chinese name 森炜达
$logoBmp = New-Object System.Drawing.Bitmap(512, 512)
$g = [System.Drawing.Graphics]::FromImage($logoBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Deep green outer circle
$forestBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 20, 48, 31)) # #14301F
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 146, 74)) # #B8924A
$goldPen = New-Object System.Drawing.Pen($goldBrush, 6)
$thinGoldPen = New-Object System.Drawing.Pen($goldBrush, 2)
$creamBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 246, 241, 231)) # #F6F1E7

$g.FillEllipse($forestBrush, 16, 16, 480, 480)
$g.DrawEllipse($goldPen, 26, 26, 460, 460)
$g.DrawEllipse($thinGoldPen, 38, 38, 436, 436)

# Tree Emblem (Stylized gold evergreen / geometric forestry crown & trunk)
# Trunk
$g.FillRectangle($goldBrush, 246, 230, 20, 80)
# Tree branches / triangles
[System.Drawing.Point[]]$pts1 = @(
    [System.Drawing.Point]::new(256, 110),
    [System.Drawing.Point]::new(190, 180),
    [System.Drawing.Point]::new(322, 180)
)
$g.FillPolygon($goldBrush, $pts1)

[System.Drawing.Point[]]$pts2 = @(
    [System.Drawing.Point]::new(256, 155),
    [System.Drawing.Point]::new(170, 225),
    [System.Drawing.Point]::new(342, 225)
)
$g.FillPolygon($goldBrush, $pts2)

[System.Drawing.Point[]]$pts3 = @(
    [System.Drawing.Point]::new(256, 200),
    [System.Drawing.Point]::new(150, 275),
    [System.Drawing.Point]::new(362, 275)
)
$g.FillPolygon($goldBrush, $pts3)

# Circular Ring Accent Dots
for ($angle = 0; $angle -lt 360; $angle += 30) {
    $rad = $angle * [Math]::PI / 180.0
    $cx = 256 + 206 * [Math]::Cos($rad)
    $cy = 256 + 206 * [Math]::Sin($rad)
    $g.FillEllipse($goldBrush, [int]($cx - 3), [int]($cy - 3), 6, 6)
}

# Typography
$fontZh = New-Object System.Drawing.Font("SimSun", 38, [System.Drawing.FontStyle]::Bold)
$fontEn = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Regular)

$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

# Chinese name 森炜达
$g.DrawString("森 炜 达", $fontZh, $goldBrush, (New-Object System.Drawing.PointF(256, 345)), $sf)

# English name
$g.DrawString("SENWEIDA TRADING", $fontEn, $creamBrush, (New-Object System.Drawing.PointF(256, 400)), $sf)
$g.DrawString("EST. DIRECT SOURCE FACTORY", $fontSub, $goldBrush, (New-Object System.Drawing.PointF(256, 428)), $sf)

$logoPath = "$publicDir\logo.png"
$logoBmp.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Favicon 64x64
$favBmp = New-Object System.Drawing.Bitmap($logoBmp, 64, 64)
$favBmp.Save("$publicDir\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$favBmp.Save("$publicDir\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Icon)
$favBmp.Dispose()
$g.Dispose()
$logoBmp.Dispose()

# 2. WECHAT QR CODE (400x400 PNG)
$qrBmp = New-Object System.Drawing.Bitmap(400, 400)
$gQr = [System.Drawing.Graphics]::FromImage($qrBmp)
$gQr.Clear([System.Drawing.Color]::White)
$penQr = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 20, 48, 31), 2)
$brushDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 20, 48, 31))
$brushGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 146, 74))

# Outer border
$gQr.DrawRectangle($penQr, 10, 10, 380, 380)

# Stylized QR Finder Patterns (Top-Left, Top-Right, Bottom-Left)
function DrawFinderPattern($gfx, $x, $y) {
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 20, 48, 31))
    $gfx.FillRectangle($brush, $x, $y, 70, 70)
    $gfx.FillRectangle([System.Drawing.Brushes]::White, ($x + 10), ($y + 10), 50, 50)
    $gfx.FillRectangle($brush, ($x + 20), ($y + 20), 30, 30)
}
DrawFinderPattern $gQr 40 40
DrawFinderPattern $gQr 290 40
DrawFinderPattern $gQr 40 290

# Simulated QR data blocks
$rand = New-Object System.Random(42)
for ($r = 0; $r -lt 25; $r++) {
    for ($c = 0; $c -lt 25; $c++) {
        if (($r -lt 8 -and $c -lt 8) -or ($r -lt 8 -and $c -gt 16) -or ($r -gt 16 -and $c -lt 8)) {
            continue
        }
        if ($rand.Next(0, 2) -eq 1) {
            $px = 40 + $c * 12.8
            $py = 40 + $r * 12.8
            $gQr.FillRectangle($brushDark, [int]$px, [int]$py, 11, 11)
        }
    }
}

# Center badge
$gQr.FillRectangle([System.Drawing.Brushes]::White, 160, 160, 80, 80)
$gQr.DrawRectangle($penQr, 160, 160, 80, 80)
$fontQr = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
$gQr.DrawString("WECHAT", $fontQr, $brushGold, (New-Object System.Drawing.PointF(200, 190)), $sfCenter)
$gQr.DrawString("森炜达", (New-Object System.Drawing.Font("SimSun", 12, [System.Drawing.FontStyle]::Bold)), $brushDark, (New-Object System.Drawing.PointF(200, 215)), $sfCenter)

$qrBmp.Save("$imagesDir\wechat-qr.png", [System.Drawing.Imaging.ImageFormat]::Png)
$gQr.Dispose()
$qrBmp.Dispose()

# 3. GENERATE ALL EDITORIAL INDUSTRIAL IMAGES (JPEGs)
$imagesToGenerate = @(
    @{ Name = "hero.jpg"; Title = "SENWEIDA FORMWORK & PLYWOOD MILL"; Sub = "DIRECT SOURCE FACTORY · HIGH-PRECISION CALIBRATED PRESS LINES"; Code = "MILL // 01-HERO"; Accent = "#8C3B2A" },
    @{ Name = "factory-1.jpg"; Title = "MULTI-DAYLIGHT HYDRAULIC HOT PRESSES"; Sub = "HIGH-TEMPERATURE THERMAL BONDING OF PHENOLIC FILM PANELS"; Code = "WORKSHOP // PRESS-01"; Accent = "#B8924A" },
    @{ Name = "factory-2.jpg"; Title = "AUTOMATED DOUBLE-SIDED SANDING LINE"; Sub = "HEAVY-DUTY CALIBRATION DRUMS MAINTAINING ±0.3mm TOLERANCE"; Code = "WORKSHOP // SANDING-02"; Accent = "#B8924A" },
    @{ Name = "factory-3.jpg"; Title = "H20 BEAM ASSEMBLY & COATING LINE"; Sub = "EN 13377 CERTIFIED SOLID SPRUCE FLANGES & STRUCTURAL WEBS"; Code = "WORKSHOP // BEAM-03"; Accent = "#B8924A" },
    @{ Name = "formwork-1.jpg"; Title = "18mm PHENOLIC FILM FACED FORMWORK"; Sub = "WHOLE POPLAR & EUCALYPTUS CORE · MIRROR CONCRETE RELEASE"; Code = "SPEC // SWD-FFP-101"; Accent = "#8C3B2A" },
    @{ Name = "formwork-2.jpg"; Title = "EUCALYPTUS CORE HEAVY-DUTY PANELS"; Sub = "HIGH-DENSITY SHUTTERING WITH SEALED WATERPROOF ACRYLIC EDGES"; Code = "SPEC // SWD-FFP-108"; Accent = "#8C3B2A" },
    @{ Name = "hardwood-1.jpg"; Title = "STRUCTURAL HARDWOOD COMMERCIAL PLYWOOD"; Sub = "BIRCH & OKOUME MULTI-PLY PANELS FOR DECKING & MILLWORK"; Code = "SPEC // SWD-HSP-201"; Accent = "#B8924A" },
    @{ Name = "h20-beam-1.jpg"; Title = "EN 13377 H20 TIMBER FORMWORK BEAMS"; Sub = "KILN-DRIED STRUCTURAL TIMBER WITH WATERPROOF YELLOW FINISH"; Code = "SPEC // SWD-HTB-301"; Accent = "#B8924A" },
    @{ Name = "qc-1.jpg"; Title = "72h BOILING WATER WBP TESTING & GAUGING"; Sub = "MICROMETER THICKNESS VERIFICATION & BOND INTEGRITY TEST"; Code = "LAB // QC-PROTOCOL"; Accent = "#8C3B2A" },
    @{ Name = "loading-1.jpg"; Title = "40HQ CONTAINER EXPORT LOAD-OUT"; Sub = "STEEL-STRAPPED SEAWORTHY EXPORT PALLETS FOR OCEAN FREIGHT"; Code = "LOGISTICS // 40HQ-FCL"; Accent = "#B8924A" },
    @{ Name = "process-cutting.jpg"; Title = "STAGE 01 / ROTARY PEELING & GRADING"; Sub = "KILN-DRIED CORE VENEERS CALIBRATED TO 8%-12% MOISTURE"; Code = "PROCESS // ROTARY-CUT"; Accent = "#B8924A" },
    @{ Name = "process-assembling.jpg"; Title = "STAGE 02 / CROSS-GRAIN CORE LAYUP"; Sub = "ROLLER-COATED PHENOLIC RESIN & PERPENDICULAR VENEER PLIES"; Code = "PROCESS // CORE-LAYUP"; Accent = "#B8924A" },
    @{ Name = "process-sanding.jpg"; Title = "STAGE 03 / CALIBRATION SANDING"; Sub = "MICROMETER SURFACE PLANING BEFORE HIGH-GRAMMAGE FILM FUSION"; Code = "PROCESS // DUAL-SAND"; Accent = "#B8924A" },
    @{ Name = "process-pressing.jpg"; Title = "STAGE 04 / HYDRAULIC HOT PRESSING"; Sub = "CONTROLLED THERMAL CURE CYCLE UNDER 2.5 MPa PRESSURE"; Code = "PROCESS // THERMAL-PRESS"; Accent = "#8C3B2A" },
    @{ Name = "process-stacking.jpg"; Title = "STAGE 05 / TRIMMING & EDGE SEALING"; Sub = "FOUR-EDGE SQUARING & TRIPLE-LAYER WATERPROOF ACRYLIC COAT"; Code = "PROCESS // EDGE-SEAL"; Accent = "#B8924A" },
    @{ Name = "process-transport.jpg"; Title = "STAGE 06 / EXPORT CONTAINER LOADING"; Sub = "MOISTURE BARRIER FILM & HIGH-TENSILE STEEL STRAPPED PALLETS"; Code = "PROCESS // LOAD-OUT"; Accent = "#B8924A" }
)

foreach ($item in $imagesToGenerate) {
    $w = 1280
    $h = 800
    if ($item.Name -eq "hero.jpg") {
        $w = 1920
        $h = 1080
    }
    
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $gfx.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Base forest color (#14301F) to dark ink (#161512) gradient
    $cTop = [System.Drawing.Color]::FromArgb(255, 20, 48, 31)
    $cBottom = [System.Drawing.Color]::FromArgb(255, 14, 25, 18)
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush((New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $cTop, $cBottom, 45.0)
    $gfx.FillRectangle($gradBrush, 0, 0, $w, $h)

    # Architectural & Timber Cross-Hatching Grid
    $gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(35, 184, 146, 74), 1)
    for ($x = 40; $x -lt $w; $x += 80) {
        $gfx.DrawLine($gridPen, $x, 0, $x, $h)
    }
    for ($y = 40; $y -lt $h; $y += 80) {
        $gfx.DrawLine($gridPen, 0, $y, $w, $y)
    }

    # Wood Veneer Layers Illustration (Stack of horizontal plywood plies)
    $plyCount = 13
    $stackTop = [int]($h * 0.32)
    $stackHeight = [int]($h * 0.45)
    $plyHeight = [int]($stackHeight / $plyCount)
    $stackLeft = [int]($w * 0.08)
    $stackWidth = [int]($w * 0.84)

    # Top film face (Red-brown or dark film)
    $accentColor = [System.Drawing.ColorTranslator]::FromHtml($item.Accent)
    $accentBrush = New-Object System.Drawing.SolidBrush($accentColor)
    $goldBrushItem = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 184, 146, 74))
    $creamBrushItem = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 246, 241, 231))
    $mutedTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 246, 241, 231))

    for ($i = 0; $i -lt $plyCount; $i++) {
        $py = $stackTop + ($i * $plyHeight)
        $isFace = ($i -eq 0 -or $i -eq ($plyCount - 1))
        if ($isFace) {
            $gfx.FillRectangle($accentBrush, $stackLeft, $py, $stackWidth, $plyHeight)
        } else {
            $layerAlpha = if ($i % 2 -eq 0) { 50 } else { 85 }
            $plyBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($layerAlpha, 230, 210, 175))
            $gfx.FillRectangle($plyBrush, $stackLeft, $py, $stackWidth, $plyHeight)
            $plyBrush.Dispose()
        }
        $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 184, 146, 74), 1)
        $gfx.DrawLine($linePen, $stackLeft, $py, ($stackLeft + $stackWidth), $py)
        $linePen.Dispose()
    }
    # Outline around stack
    $borderPen = New-Object System.Drawing.Pen($goldBrushItem, 2)
    $gfx.DrawRectangle($borderPen, $stackLeft, $stackTop, $stackWidth, $stackHeight)
    $borderPen.Dispose()

    # Technical Dimension Markers & Crosshairs
    $dimPen = New-Object System.Drawing.Pen($goldBrushItem, 1)
    $gfx.DrawLine($dimPen, ($stackLeft - 20), $stackTop, ($stackLeft - 20), ($stackTop + $stackHeight))
    $gfx.DrawLine($dimPen, ($stackLeft - 30), $stackTop, ($stackLeft - 10), $stackTop)
    $gfx.DrawLine($dimPen, ($stackLeft - 30), ($stackTop + $stackHeight), ($stackLeft - 10), ($stackTop + $stackHeight))

    # Dark Editorial Duotone Overlay on bottom half
    $overlayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 16, 21, 18))
    $gfx.FillRectangle($overlayBrush, 0, [int]($h * 0.65), $w, [int]($h * 0.35))
    $overlayBrush.Dispose()

    # Hairline divider
    $gfx.DrawLine($dimPen, 40, [int]($h * 0.65), ($w - 40), [int]($h * 0.65))

    # Top Bar: Brand, Code & Certification
    $fontTop = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Bold)
    $gfx.DrawString("SENWEIDA TRADING CO., LTD. // MILL ARCHIVE", $fontTop, $goldBrushItem, 40, 25)
    $gfx.DrawString($item.Code, $fontTop, $creamBrushItem, ($w - 240), 25)

    # Bottom Editorial Typography
    $titleFontSize = if ($w -gt 1500) { 32 } else { 24 }
    $fontTitle = New-Object System.Drawing.Font("Arial", $titleFontSize, [System.Drawing.FontStyle]::Bold)
    $fontSub = New-Object System.Drawing.Font("Arial", 13, [System.Drawing.FontStyle]::Regular)
    $fontTag = New-Object System.Drawing.Font("Arial", 10, [System.Drawing.FontStyle]::Bold)

    $gfx.DrawString("FACTORY VERIFICATION PHOTO // XUZHOU, CHINA", $fontTag, $goldBrushItem, 45, [int]($h * 0.70))
    $gfx.DrawString($item.Title, $fontTitle, $creamBrushItem, 45, [int]($h * 0.75))
    $gfx.DrawString($item.Sub, $fontSub, $mutedTextBrush, 45, [int]($h * 0.86))
    $gfx.DrawString("FSC CHAIN-OF-CUSTODY · 72h WBP PHENOLIC · CALIBRATED PRESS", $fontTag, $goldBrushItem, 45, [int]($h * 0.93))

    $targetFile = "$imagesDir\" + $item.Name
    $bmp.Save($targetFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)

    $gfx.Dispose()
    $bmp.Dispose()
    $gradBrush.Dispose()
    $gridPen.Dispose()
    $accentBrush.Dispose()
    $goldBrushItem.Dispose()
    $creamBrushItem.Dispose()
    $mutedTextBrush.Dispose()
    $dimPen.Dispose()
    $fontTop.Dispose()
    $fontTitle.Dispose()
    $fontSub.Dispose()
    $fontTag.Dispose()
}

Write-Host "All assets generated successfully!"
