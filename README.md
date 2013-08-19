# sumeru与phoneGap性能对比

## 测试环境
<table>
    <tr><td>机型</td><td>SAMSUNG</td></tr>
    <tr><td>系统</td><td>Andriod 4.0.3</td></tr>
</table>

## [HTML5支持性检测](http://html5test.com)
<table>
    <tr><td>sumeru</td><td>470/500</td></tr>
    <tr><td>phoneGap</td><td>416/500</td></tr>
    <tr><td>原生浏览器</td><td>431/500</td></tr>
</table>

sumeru > pohoneGap > 原生浏览器

## [CSS3支持性检测](http://css3test.com)
<table>
    <tr><td>sumeru</td><td>49%</td></tr>
    <tr><td>phoneGap</td><td>49%</td></tr>
    <tr><td>原生浏览器</td><td>49%</td></tr>
</table>

sumeru = pohoneGap = 原生浏览器

## [CSS3选择器支持性检测](http://tools.css3.info/selectors-test/test.html)
<table>
    <tr><td>sumeru</td><td>558/574</td></tr>
    <tr><td>phoneGap</td><td>574/574</td></tr>
    <tr><td>原生浏览器</td><td>574/574</td></tr>
</table>

sumeru < pohoneGap = 原生浏览器

## [Acid3检测](http://acid3.acidtests.org)
<table>
    <tr><td>sumeru</td><td>100(满分)</td></tr>
    <tr><td>phoneGap</td><td>100(满分)</td></tr>
    <tr><td>原生浏览器</td><td>100(满分)</td></tr>
</table>

sumeru = pohoneGap = 原生浏览器

## [JavaScript符合性检测](http://test262.ecmascript.org/default.html)
<table>
    <tr><td>sumeru</td><td>Pase:11561 Fail:17</td></tr>
    <tr><td>phoneGap</td><td>Pase:11553 Fail:25</td></tr>
    <tr><td>原生浏览器</td><td>--</td></tr>
</table>

sumeru > pohoneGap = 原生浏览器

## [V8 Benchmark](http://octane-benchmark.googlecode.com/svn/latest/index.html)
<table>
    <tr><td>sumeru</td><td>796</td></tr>
    <tr><td>phoneGap</td><td>695</td></tr>
    <tr><td>原生浏览器</td><td>705</td></tr>
</table>

sumeru > 原生浏览器 > pohoneGap

## [CSS3 Layout Performance Test](http://ie.microsoft.com/testdrive/performance/mazesolver)

<table>
    <tr><td>sumeru</td><td>110s</td></tr>
    <tr><td>phoneGap</td><td>294s</td></tr>
    <tr><td>原生浏览器</td><td>330s</td></tr>
</table>

sumeru > pohoneGap > 原生浏览器
