import React from "react";

export default function Navbar(){
    return(
        <div>
             <header>
        <ul>
        <div class="ab7">
            <div class="abcd">
            <img class="asd"src="./images/logo.svg" />
            </div>
            <div class="abc">
            <h3 class="ab6" style="color:#F17228">food</h3>
            <h3 class="ab5" style="color:#FFB30E;">wagon</h3>
            </div>  
        </div>
        <div class="nav-565">
            <h3>Deliver to:</h3>
            <img class="nav-logo" src="./images/nav-image/map-marker-alt.png" alt="" />
            <h3>Muhammadpur Bus stand dhaka</h3>
        </div>
        <div class="search12">
            <input class="search123" type="text" id="fname" name="fname" value="Search food" />
    
            <div class="abcde">login</div>
            
        </div>
        </ul>
    
        </header>
        <nav class="nav-back">
            <div class="abc1">
                <h3>Are you starving?</h3>
                <p>Within in a few click , find meals that are accesible near you</p>
                <div class="nav">
                <div class="nav1">Delivery </div><br />
                <div class="nav1">Pick up</div>
    
                </div>
                <img src="/images/Image.png" />
                <input type="text" id="fname" name="fname" value="Enter your address" />
                <h3>Find Food</h3>
    
    
            </div>
             <div class="card">
                <div class="image">
                    <img src="/images/Food Photo (5).png" alt="image y"  />
                </div>
                <div class="title">Greys Vage</div>
                <div class="discount">6 Days Remaining</div> 
            </div>
        </nav>
        <br /><br /><br />
        </div>
    )
}