---
title: Customizing Bottom-navigation
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_bottom-navigation
position: 9
---

# Customizing Bottom-navigation

## Variables

The following table lists the available variables for customization.

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody>
        <tr>
    <td>$kendo-bottom-nav-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the BottomNavigation items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-border-width</td>
    <td>List</td>
    <td><code>1px 0px 0px 0px</code></td>
    <td><code>1px 0px 0px 0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td>String</td>
    <td><code>normal</code></td>
    <td><code>normal</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-letter-spacing</td>
    <td>Number</td>
    <td><code>.2px</code></td>
    <td><code>0.2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-width</td>
    <td>Number</td>
    <td><code>72px</code></td>
    <td><code>72px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-max-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size * 2.5} + #{$kendo-padding-md-x * 2} - #{$kendo-bottom-nav-padding-x * 2} )</code></td>
    <td><code>calc( 40px + 16px - 8px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td>List</td>
    <td><code>0 k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0 4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat BottomNavigation.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

