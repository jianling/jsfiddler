# T5与phoneGap性能对比

## 测试环境
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>系统</td><td>Andriod 4.0.4</td><td>Andriod 4.1.1</td><td>Andriod 4.3</td><td>IOS 5.1</td></tr>
    <tr><td>处理器主频</td><td>1GHz</td><td>1.5GHz</td><td>1.5GHz</td><td>1GHz</td></tr>
    <tr><td>处理器核心数</td><td>单核心</td><td>双核心</td><td>四核心</td><td>双核心</td></tr>
    <tr><td>系统内存</td><td>768MB</td><td>1GB</td><td>2GB</td><td>512MB</td></tr>
</table>

## [HTML5支持性检测](http://html5test.com)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>470/500</td><td>470/500</td><td>470/500</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>416/500</td><td>298/500</td><td>298/500</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>431/500</td><td>298/500</td><td>298/500</td><td>344/500</td></tr>
    <tr><td>Chrome Beta</td><td>429/500</td><td>429/500</td><td>410/500</td><td>344/500</td></tr>
</table>

## [CSS3支持性检测](http://css3test.com)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>49%</td><td>48%</td><td>48%</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>49%</td><td>48%</td><td>48%</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>49%</td><td>48%</td><td>48%</td><td>51%</td></tr>
    <tr><td>Chrome Beta</td><td>66%</td><td>66%</td><td>65%</td><td>51%</td></tr>
</table>

## [Acid3检测](http://acid3.acidtests.org)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>-</td></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td></tr>
</table>

## [Canvas Performance Test(fps越大，性能越好)](http://www.smashcat.org/av/canvas_test/)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>13fps</td><td>16fps</td><td>96fps</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>3fps</td><td>14fps</td><td>22fps</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>3~4fps</td><td>15fps</td><td>23fps</td><td>40fps</td></tr>
    <tr><td>Chrome Beta</td><td>8fps</td><td>50fps</td><td>38fps</td><td>33fps</td></tr>
</table>

## [CSS3 Layout Performance Test(值越小，css3布局性能越强)](http://ie.microsoft.com/testdrive/performance/mazesolver)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>110s</td><td>57s</td><td>71s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>294s</td><td>80s</td><td>27s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>330s</td><td>88s</td><td>24s</td><td>37s</td></tr>
    <tr><td>Chrome Beta</td><td>178s</td><td>192s</td><td>85s</td><td>45s</td></tr>
</table>


## [V8 Benchmark(数值越大，得分越高)](http://octane-benchmark.googlecode.com/svn/latest/index.html)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>796</td><td>1357</td><td>1768</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>695</td><td>1191</td><td>1564</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>705</td><td>1190</td><td>1517</td><td>559</td></tr>
    <tr><td>Chrome Beta</td><td>651</td><td>1797</td><td>2251</td><td>183</td></tr>
</table>


## [Javascript Raytracer(Basic Render)(值越小，javascript计算能力越强)](http://nontroppo.org/timer/progressive_raytracer.html)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>4.508s 11.778s 19.275s</td><td>3.05s 7.687s 12.947s</td><td>4.987s 11.647s 18.633s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>13.869s 41.68s 65.898s</td><td>5.213s 12.392s 19.66s</td><td>3.306s 8.167s 12.778s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>15.308s 48.905s 73.793s</td><td>5.483s 13.39s 21.884s</td><td>3.31s 7.973s 12.844s</td><td>2.544s 8.124s 14.31s</td></tr>
    <tr><td>Chrome Beta</td><td>12.035s 31.782s 57.851s</td><td>11.026s 35.22s 58.043s</td><td>5.939s 17.989s 30.297s</td><td>2.843s 8.476s 14.619s</td></tr>
</table>


## [Mesh Transform Benchmark(值越小，javascript计算能力越强)](http://www.webkit.org/misc/morph.html)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>161ms</td><td>105ms</td><td>87ms</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>377ms</td><td>242ms</td><td>164ms</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>390ms</td><td>243ms</td><td>159ms</td><td>210ms</td></tr>
    <tr><td>Chrome Beta</td><td>178ms</td><td>101ms</td><td>92ms</td><td>1099ms</td></tr>
</table>



