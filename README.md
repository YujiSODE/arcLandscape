# ![arcLandscape_js_20220312_txt_16X16](arcLandscape_js_20220312_txt_16X16.png)arcLandscape
Tool to convert text or hexadecimal sequence into generative art based on arc system.  
GitHub: https://github.com/YujiSODE/arcLandscape  
Wiki: https://github.com/YujiSODE/arcLandscape/wiki  
>Copyright (c) 2022 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php  
______
![arcLandscape_TITLE_640x320](https://user-images.githubusercontent.com/19919184/159157058-089b1f75-a36b-4af7-b734-baf0caa6326a.png)

`arcLandscape` is a tool to convert text or hexadecimal sequence into generative art based on arc system.  
The arc system is a system, where every object is regarded as structure on a spherical surface.

## Algorithm
<a href='algorithm.md'>
	<img src='https://user-images.githubusercontent.com/19919184/161039825-e3730afd-1951-4db4-8f32-44b7f2bba564.png' arl='details of algorithm'>
	<p><b>Figure 1. Chart showing algorithm of arc system.</b><br>Result paths (blue) derives from given circle (dashed line) and value changes along <i>y</i> axis (red).</p>
</a>

## Scripts
### Main script
- [`arcLandscape.js`](arcLandscape.js)

### GUI
- [`index.html`](index.html): GUI
- [`index_main.js`](index_main.js): script for GUI
- [`index_style.css`](index_style.css): style for GUI

## Compatibility
- Firefox `98.0.1+` (64-bit)
