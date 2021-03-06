# Change Log 
## [Unreleased]

## Released: [1.1.1] - 2022-04-08
## [1.1.1] - 2022-04-08
## Fixed
- [`README.md`] line 29: from `## Compatibilityalgorithm.md` to `## Compatibility`

## Released: [1.1.0] - 2022-04-08
## [1.1.0] - 2022-04-08
## Fixed
- [`algorithm.md`] line 88:  
  ```
   `i = from L-1 to 0`
  ```
- [`algorithm.md`] line 88:  
  ```
  `i = from 0 to L-1`
  ```

## [1.1.0] - 2022-04-07
## Added
- [`algorithm.md`] line 15:  
  ```
   **Figure 1. Chart showing algorithm of arc system.**  
  ```
- [`README.md`] line 17:  
  ```
  	<p><b>Figure 1. Chart showing algorithm of arc system.</b><br>Result paths (blue) derives from given circle (dashed line) and value changes along <i>y</i> axis (red).</p>
  ```

## Fixed
- [`README.md`] line 17: from `_y_` to `<i>y</i>`

## [1.1.0] - 2022-04-06
## Fixed
- [`algorithm.md`] line 1:  
  ```
  # `arcLandscape/algorithm.md`
  ```

## [1.1.0] - 2022-04-04
## Added
- [`algorithm.md`] line 15: `**Figure 1. Chart showing algorithm.**  `
- [`README.md`] line 17: `<b>Figure 1. Chart showing algorithm.</b><br>` is inserted

## [1.1.0] - 2022-04-01
## Changed
- [`algorithm.md`] lines 2-16: modified
- [`README.md`] lines 15-18: added a link from `README.md` to `algorithm.md`

## Added
- [`algorithm.md`]: cf.: #23
- [`README.md`] lines 13-15:  
  ```
  ## Algorithm
  ![algorithm_arcLandscape](https://user-images.githubusercontent.com/19919184/161039825-e3730afd-1951-4db4-8f32-44b7f2bba564.png)  
  Result paths (blue) derives from given circle (dashed line) and value changes along _y_ axis (red).
  ```

## Released: [1.0.1] - 2022-03-28
## [1.0.1] - 2022-03-28
## Fixed
- [`index_main.js`] lines 68, 74 and 84: fixed duplicated variable for canvas access (`cvs` to `C`)

## Changed
- [`index_main.js`] lines 17-20 and 30-36: changed to add the upper limit of canvas size as 3000 

## Released: [1.0] - 2022-03-23
## [1.0] - 2022-03-23
## Added
- [`README.md`] lines 13-24: added `## Scripts` and `## Compatibility`

## [1.0] - 2022-03-23
## Added
- [`index.html`] lines 69-71: added title image link

## [1.0] - 2022-03-20
## Added
- [`README.md`] lines 9-10: added title image link

## [1.0] - 2022-03-18
## Added
- [`index.html`] line 53: `<br><code>(0-9,A-F,a-f)</code>`

## Fixed
- [`index_main.js`] line 52:  
  ```
   		arcLandscape(cId,INPUT.value.replaceAll(/[^0-1A-Fa-f]/g,''),!REVERSE.checked);
  ```

## Added<i>y</i>
- [`index_main.js`] lines 74 and 75: added a comment to show output filename (`"AL<number>_TYPE<type|typeReverse><width>x<height>.png"`)

## [1.0] - 2022-03-17
## Changed
- [`index_main.js`]: lines 21-23, 29-31, 37-39, 45-47, 53-55 and 74: changed filename of output to download
- [`index.html`] line 31: a link to wiki page

## Released: [0.1 beta] - 2022-03-17
## [0.1 beta] - 2022-03-16
## Fixed
- [`index_main.js`] lines 46, 59 and 60: fixed timestamp generation

## [0.1 beta] - 2022-03-15
## Changed
- [`README.md`] lines 1-10: added description
- [`index.html`] lines 54-55:  
  >```
  > 						<!-- loading order -->
  >					<div><label>Reverse order<input type='checkbox' id='reverseOrder' value='reverse'></label></div>
  >```
- [`index.html`] line 51: moved to after `line 53`

## [0.1 beta] - 2022-03-12
