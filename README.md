# T5与phoneGap对比

本次对比主要包括‘标准支持’、‘CSS渲染和js执行性能’两个方面，以3个不同配置的Android机器作为测试平台，并用iPad 2作为参照。

标准支持部分主要看测试目标对HTML5、CSS3的支持程度以及V8 Benchmark的评分；
CSS渲染和js执行性能部分主要看测试目标的CSS渲染能力，Canvas性能，Javascript执行能力，DOM操作能力。

根据各项测试数据，可以得出如下几个结论：
* phoneGap中的webView应该就是原生的webView，没有做优化，只是进行了扩展和封装
* T5对HTML5的支持高于phoneGap（原生webView），但是对CSS3的支持与phoneGap（原生webView）相同且低于Chrome Beta
* 在低配置机器上T5的CSS渲染能力、Canvas性能和Javascript计算能力远高于phoneGap（原生webView）和Chrome Beta
* 随着机器配置的提升，T5相对于phoneGap（原生webView）的优势逐步降低
* 在任何机型（指本次测试使用的三种不同配置的机型）上，T5对于DOM的操作能力都低于Chrome Beta
* 在高配置的机器上，T5对于DOM的操作能力会稍微高于iPad 2上的Chrome（IOS上的Chrome内核性能低于系统自带的Safafi）

另外在Google Nexus 7(二代)上的T5中运行tieba WebAPP版，运行和操作都比较流畅，体验与Chrome相当。


<br /><br /><br />


附上测试数据：
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
    <tr><td>Chrome (Beta)</td><td>429/500</td><td>429/500</td><td>410/500</td><td>344/500</td></tr>
</table>

## [CSS3支持性检测](http://css3test.com)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>49%</td><td>48%</td><td>48%</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>49%</td><td>48%</td><td>48%</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>49%</td><td>48%</td><td>48%</td><td>51%</td></tr>
    <tr><td>Chrome (Beta)</td><td>66%</td><td>66%</td><td>65%</td><td>51%</td></tr>
</table>

## [Acid3检测](http://acid3.acidtests.org)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>-</td></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td></tr>
    <tr><td>T5</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td><td>100(满分)</td></tr>
</table>

## [V8 Benchmark(数值越大，得分越高)](http://octane-benchmark.googlecode.com/svn/latest/index.html)
<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>796</td><td>1357</td><td>1768</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>695</td><td>1191</td><td>1564</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>705</td><td>1190</td><td>1517</td><td>559</td></tr>
    <tr><td>Chrome (Beta)</td><td>651</td><td>1797</td><td>2251</td><td>183</td></tr>
</table>

## [Canvas Performance Test(fps越大，性能越好)](http://www.smashcat.org/av/canvas_test/)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>13fps</td><td>16fps</td><td>96fps</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>3fps</td><td>14fps</td><td>22fps</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>3~4fps</td><td>15fps</td><td>23fps</td><td>40fps</td></tr>
    <tr><td>Chrome (Beta)</td><td>8fps</td><td>50fps</td><td>38fps</td><td>33fps</td></tr>
</table>

## [CSS3 Layout Performance Test(值越小，css3布局性能越强)](http://ie.microsoft.com/testdrive/performance/mazesolver)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>110s</td><td>57s</td><td>71s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>294s</td><td>80s</td><td>27s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>330s</td><td>88s</td><td>24s</td><td>37s</td></tr>
    <tr><td>Chrome (Beta)</td><td>178s</td><td>192s</td><td>85s</td><td>45s</td></tr>
</table>

## [Javascript Raytracer(Basic Render)(值越小，javascript计算能力越强)](http://nontroppo.org/timer/progressive_raytracer.html)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>4.508s 11.778s 19.275s</td><td>3.05s 7.687s 12.947s</td><td>4.987s 11.647s 18.633s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>13.869s 41.68s 65.898s</td><td>5.213s 12.392s 19.66s</td><td>3.306s 8.167s 12.778s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>15.308s 48.905s 73.793s</td><td>5.483s 13.39s 21.884s</td><td>3.31s 7.973s 12.844s</td><td>2.544s 8.124s 14.31s</td></tr>
    <tr><td>Chrome (Beta)</td><td>12.035s 31.782s 57.851s</td><td>11.026s 35.22s 58.043s</td><td>5.939s 17.989s 30.297s</td><td>2.843s 8.476s 14.619s</td></tr>
</table>

## [Setting and getting DOM node attributes.](http://dromaeo.com/?dom)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>49.18runs/s</td><td>78.96runs/s</td><td>108.57runs/s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>34.28runs/s</td><td>41.89runs/s</td><td>52.10runs/s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>40.94runs/s</td><td>40.91runs/s</td><td></td><td>72.77runs/s</td></tr>
    <tr><td>Chrome (Beta)</td><td>51.64runs/s</td><td>82.11runs/s</td><td>142.37runs/s</td><td>52.68runs/s</td></tr>
</table>

## [Creating and injecting DOM nodes into a document.](http://dromaeo.com/?dom)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>24.08runs/s</td><td>40.29runs/s</td><td>50.10runs/s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>23.78runs/s</td><td>40.05runs/s</td><td>51.06runs/s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>28.53runs/s</td><td>40.56runs/s</td><td></td><td>75.21runs/s</td></tr>
    <tr><td>Chrome (Beta)</td><td>30.82runs/s</td><td>40.94runs/s</td><td>56.34runs/s</td><td>66.53runs/s</td></tr>
</table>

## [Querying DOM elements in a document.](http://dromaeo.com/?dom)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>788.17runs/s</td><td>1211.18runs/s</td><td>1417.73runs/s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>633.75runs/s</td><td>1147.76runs/s</td><td>1239.26runs/s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>725.83runs/s</td><td>1114.84runs/s</td><td></td><td>1794.23runs/s</td></tr>
    <tr><td>Chrome (Beta)</td><td>968.59runs/s</td><td>1491.35runs/s</td><td>2672.16runs/s</td><td>1330.54runs/s</td></tr>
</table>

## [Traversing a DOM structure.](http://dromaeo.com/?dom)

<table>
    <tr><th>机型</th><th>SAMSUNG GT-S7562i</th><th>魅族MX M031</th><th>Google Nexus 7(二代)</th><th>iPad 2</th></tr>
    <tr><td>T5</td><td>25.29runs/s</td><td>49.10runs/s</td><td>53.90runs/s</td><td>-</td></tr>
    <tr><td>phoneGap</td><td>23.62runs/s</td><td>48.56runs/s</td><td>47.72runs/s</td><td>-</td></tr>
    <tr><td>原生浏览器</td><td>28.14runs/s</td><td>47.85runs/s</td><td></td><td>67.36runs/s</td></tr>
    <tr><td>Chrome (Beta)</td><td>31.37runs/s</td><td>44.72runs/s</td><td>71.09runs/s</td><td>38.60runs/s</td></tr>
</table>
