import React from 'react';
import Navbar from './Navbar';
import Sing from './Sing';

const Header = () => (
    <header id="page-header" class="l-header pos_fixed bg_transparent shadow_none id_14" itemscope itemtype="https://schema.org/WPHeader">
        <div class="l-subheader at_middle width_full">
            <div class="l-subheader-h">
                
                <div class="l-subheader-cell at_left">
                    <div class="w-image hidden_for_mobiles ush_image_1">
                        <a class="w-image-h" href="#home">
                            <img width="294" height="90" src="/images/marketing-logo-dark.png" class="attachment-full size-full" alt="" />
                        </a>
                    </div>
                </div>

                <div class="l-subheader-cell at_center" />

                <div class="l-subheader-cell at_right">
                    <Navbar />
                    <Sing />
                </div>

            </div>
        </div>
    </header>
);

export default Header;