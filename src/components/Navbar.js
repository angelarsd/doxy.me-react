import React from 'react';

const Navbar = () => (
    <nav class="w-nav hidden_for_mobiles ush_menu_2 height_full type_desktop dropdown_height m_align_left m_layout_dropdown"
        itemscope itemtype="https://schema.org/SiteNavigationElement">
        
        <a class="w-nav-control" aria-label="Menu">
            <div class="w-nav-icon"><i></i></div>
        </a>

        <ul class="w-nav-list level_1 hide_for_mobiles hover_simple">

            <li id="menu-item-15"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item w-nav-item level_1 menu-item-15">
                <a class="w-nav-anchor level_1" href="#home">
                    <span class="w-nav-title">Home</span><span class="w-nav-arrow" />
                </a>
            </li>

            <li id="menu-item-36" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-36">
                <a class="w-nav-anchor level_1" href="#patients/">
                    <span class="w-nav-title">For Patients</span>
                    <span class="w-nav-arrow" />
                </a>
            </li>

            <li id="menu-item-35" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-35">
                <a class="w-nav-anchor level_1" href="#features">
                    <span class="w-nav-title">For Providers</span>
                    <span class="w-nav-arrow" />
                </a>
            </li>

            <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-34">
                <a class="w-nav-anchor level_1" href="#enterprise">
                    <span class="w-nav-title">For Clinics</span>
                    <span class="w-nav-arrow"></span>
                </a>
            </li>

            <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-33">
                <a class="w-nav-anchor level_1" href="#pricing">
                    <span class="w-nav-title">Pricing</span><span class="w-nav-arrow"></span>
                </a>
            </li>

            <li class="w-nav-close"></li>
        </ul>
        <div class="w-nav-options hidden"></div>
    </nav>
);

export default Navbar;