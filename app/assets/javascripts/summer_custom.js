/**
 * Created with JetBrains RubyMine.
 * User: Jialiang Gu
 * Date: 9/25/12
 * Time: 9:41 AM
 * To change this template use File | Settings | File Templates.
 */
/*
 Author:Jialiang Gu @ ECE, CMU
 Email: jgu1@andrew.cmu.edu
 Edit time: July - August 2012
 */

// JavaScript Document
var colorOption = 'white';
var noDetail = 'true';
var pageType = 'homePage';

function changePageType(option)
{
    pageType = option;
}

function OpenWindow()
{
    alert("called js!")
}

function turnColor(option){
    if(option == 'black')
    {
        if(pageType == 'homePage')
        {
            if(noDetail == 'true')
            {
                document.getElementById('fundDetail').innerHTML="<span><br/> Please move your mouse on the thermometer to see where the money goes:<br/><br/><span>";

            }

            colorOption='black';

            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }
            var tds = document.getElementById("thermometer_percentage").getElementsByTagName("td");
            var tdsLength = tds.length;
            for(i=0;i<tdsLength;i++)
            {
                tds[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the blue to light blue*/
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/
            /*turn the blocks background to #111111*/
            var introAndTestimonial = document.getElementById('introAndTestimonial');
            introAndTestimonial.style.background = "rgb(50,50,50)";

            var donorSContainter = document.getElementById('donorSContainter');
            donorSContainter.style.background = "rgb(50,50,50)";

            var expertAva = document.getElementById('expertAva');
            expertAva.style.background="url(/blackAvaBoxBG.jpg)";

            var expertGislin = document.getElementById('expertGislin');
            expertGislin.style.background="url(/blackGislinBoxBG.jpg)";

            var expertJeff = document.getElementById('expertJeff');
            expertJeff.style.background="url(/blackJeffBoxBG.jpg)";

            var therm = document.getElementById('therm');
            therm.style.background="rgb(50,50,50)";



            var thermometer = document.getElementById('thermometer');
            thermometer.style.background="url(/blackThermometer.jpg)";
            /*turn the blocks background to #111111*/

            var footerTxts = getElementsByClassName(document.body,"footerTxt");
            var footerTxtsLength = footerTxts.length;
            for(i = 0 ; i<footerTxtsLength;i++)
            {
                footerTxts[i].style.background="rgb(50,50,50)";
            }

            if(noDetail == 'true')
            {

                var img = document.createElement("IMG");
                if(colorOption=='white') img.src = "/greyThermLegend.jpg";
                else                     img.src = "/blackThermLegend.jpg";

                document.getElementById('fundDetail').appendChild(img);
            }

            var leftFrame = document.getElementById("leftFrame");
            leftFrame.style.background="#000000";

            var rightFrame = document.getElementById("rightFrame");
            rightFrame.style.background="#000000";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/blackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }

        else if(pageType == 'introduction')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/blackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'fundraising')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/blackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'ava')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/avaBlackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'gislin')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/gislinBlackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'jeff')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/jeffBlackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'donate')
        {
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }

            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/blackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";

            var DonateDemoImg = document.createElement("IMG");
            DonateDemoImg.src="/blackDonateDemo.jpg";
            document.getElementById("donateDemo").innerHTML="";
            document.getElementById("donateDemo").appendChild(DonateDemoImg);

            var computer = document.createElement("IMG");
            computer.src="/blackComputer.jpg";
            document.getElementById("computer").innerHTML="";
            document.getElementById("computer").appendChild(computer);

            var phone = document.createElement("IMG");
            phone.src="/blackPhone.jpg";
            document.getElementById("phone").innerHTML="";
            document.getElementById("phone").appendChild(phone);

            var mail = document.createElement("IMG");
            mail.src="/blackMail.jpg";
            document.getElementById("mail").innerHTML="";
            document.getElementById("mail").appendChild(mail);

            var donateOptions = getElementsByClassName(document.body,"donateOption");
            var donateOptionsLength = donateOptions.length;
            for(i=0;i<donateOptionsLength;i++)
            {
                donateOptions[i].style.color = "#FFFFFF";
            }
        }

        else if(pageType == 'video')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="rgb(51,204,255)";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="rgb(51,204,255)";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#FFFFFF";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#FFFFFF";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "rgb(50,50,50)";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#000000";

            var nav = document.getElementById("nav");
            nav.style.background="#000000";

            document.body.style.background="#000000";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/blackHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }


    }
    else //change color to white
    {
        if(pageType == 'homePage')
        {
            if(noDetail == 'true')
            {
                document.getElementById('fundDetail').innerHTML="<span><br/> Please move your mouse on the thermometer to see where the money goes:<br/><br/><span>";

            }

            colorOption ='white';

            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }
            var tds = document.getElementById("thermometer_percentage").getElementsByTagName("td");
            var tdsLength = tds.length;
            for(i=0;i<tdsLength;i++)
            {
                tds[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the light blue to blue*/
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/
            /*turn the blocks background to #111111*/
            var introAndTestimonial = document.getElementById('introAndTestimonial');
            introAndTestimonial.style.background = "#EEEEEE";

            var donorSContainter = document.getElementById('donorSContainter');
            donorSContainter.style.background = "#EEEEEE";

            var expertAva = document.getElementById('expertAva');
            expertAva.style.background="url(/greyAvaBoxBG.jpg)";

            var expertGislin = document.getElementById('expertGislin');
            expertGislin.style.background="url(/greyGislinBoxBG.jpg)";

            var expertJeff = document.getElementById('expertJeff');
            expertJeff.style.background="url(/greyJeffBoxBG.jpg)";

            var therm = document.getElementById('therm');
            therm.style.background="#EEEEEE";

            var thermometer = document.getElementById('thermometer');
            thermometer.style.background="url(/greyThermometer.jpg)";
            /*turn the blocks background to #111111*/

            if(noDetail == 'true')
            {

                var img = document.createElement("IMG");
                if(colorOption=='white') img.src = "/greyThermLegend.jpg";
                else                     img.src = "/blackThermLegend.jpg";

                document.getElementById('fundDetail').appendChild(img);
            }

            var footerTxts = getElementsByClassName(document.body,"footerTxt");
            var footerTxtsLength = footerTxts.length;
            for(i = 0 ; i<footerTxtsLength;i++)
            {
                footerTxts[i].style.background="#EEEEEE";
            }

            var leftFrame = document.getElementById("leftFrame");
            leftFrame.style.background="#FFFFFF";

            var rightFrame = document.getElementById("rightFrame");
            rightFrame.style.background="#FFFFFF";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/redHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";

        }
        else if(pageType == 'introduction')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/redHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'fundraising')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/redHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'ava')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";
            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/avaHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'gislin')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/gislinHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'jeff')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/jeffHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }
        else if(pageType == 'donate')
        {
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }

            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#069";
            }
            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/redHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";

            var DonateDemoImg = document.createElement("IMG");
            DonateDemoImg.src="/donateDemo.jpg";
            document.getElementById("donateDemo").innerHTML="";
            document.getElementById("donateDemo").appendChild(DonateDemoImg);

            var computer = document.createElement("IMG");
            computer.src="/computer.jpg";
            document.getElementById("computer").innerHTML="";
            document.getElementById("computer").appendChild(computer);

            var phone = document.createElement("IMG");
            phone.src="/phone.jpg";
            document.getElementById("phone").innerHTML="";
            document.getElementById("phone").appendChild(phone);

            var mail = document.createElement("IMG");
            mail.src="/mail.jpg";
            document.getElementById("mail").innerHTML="";
            document.getElementById("mail").appendChild(mail);



            var donateOptions = getElementsByClassName(document.body,"donateOption");
            var donateOptionsLength = donateOptions.length;
            for(i=0;i<donateOptionsLength;i++)
            {
                donateOptions[i].style.color = "#000000";
            }
        }
        else if(pageType == 'video')
        {
            var h3s = document.getElementsByTagName("h3");
            var h3sLength = h3s.length;
            for(i=0;i<h3sLength;i++)
            {
                h3s[i].style.color="#069";
            }

            var navs = document.getElementById("nav").getElementsByTagName("a");
            var navsLength = navs.length;
            for(i=0;i<navsLength;i++)
            {
                navs[i].style.color="#069";
            }
            /*turn the black to white*/
            var ps = document.getElementsByTagName("p");
            var psLength = ps.length;
            for(i=0;i<psLength;i++)
            {
                ps[i].style.color="#000000";
            }
            var spans = document.getElementsByTagName("span");
            var spansLength = spans.length;
            for(i=0;i<spansLength;i++)
            {
                spans[i].style.color="#000000";
            }
            /*turn the black to white*/

            var plaine = document.getElementById("plaine");
            plaine.style.background = "#EEEEEE";
            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var editableBelt = document.getElementById("editableBelt");
            editableBelt.style.background="#FFFFFF";

            var nav = document.getElementById("nav");
            nav.style.background="#FFFFFF";

            document.body.style.background="#FFFFFF";

            var headerImg = document.createElement("IMG");
            headerImg.src= "/redHeader.jpg";
            document.getElementById("header").innerHTML="";
            document.getElementById("header").appendChild(headerImg);
            headerImg.style.width="100%";
        }

    }

}

function getElementsByClassName(node, classname) {
    var a = [];
    var re = new RegExp('(^| )'+classname+'( |$)');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}

/*this part is for scroll door*/
var scrollDoor = document.getElementById("scrollDoor");
function selectTag(showContent,selfObj)
{
    var tag = document.getElementById("tags").getElementsByTagName("li");
    var tagLength = tag.length;
    for(i=0;i<tagLength;i++)
    {
        tag[i].className="";
    }
    selfObj.parentNode.className="selectTag";
    for(i=0; j=document.getElementById("tagContent"+i); i++){
        j.style.display = "none";
    }
    document.getElementById(showContent).style.display = "block";
}

////////////////////////////////////////////////////////////////////////

var x=0;
function scrollTag(){
    var tags = document.getElementById("tags").getElementsByTagName("a");
    if(x<4) {x=x+1;}
    else x=0;
    var tag = document.getElementById("tags").getElementsByTagName("li");
    var tagLength = tag.length;
    for(i=0;i<tagLength;i++)
    {
        tag[i].className="";
    }
    tags[x].parentNode.className = "selectTag";
    for(i=0;j=document.getElementById("tagContent"+i);i++)
    {
        j.style.display = "none";
    }
    document.getElementById("tagContent"+x).style.display = "block";
}

////////////////////////////////////////////////////////////////////////

var scrolll=setInterval(scrollTag,10000);
function selectedItem(){
    clearInterval(scrolll);
}

////////////////////////////////////////////////////////////////////////

function autoShift(){

    scrolll = setInterval(scrollTag,10000);
}
/*this part is for scroll door*/

/*this part is for fundraising thermometer*/
function mercury()
{
    var raised = document.getElementById('raised').innerHTML;
    var goal = document.getElementById('goal').innerHTML;

    raised = raised.replace(/[^0-9\.]+/g,"");
    goal = goal.replace(/[^0-9\.]+/g,"");

    raised = raised *1;
    goal = goal*1;

    if(raised > goal)
    {
        raised = goal;
        document.getElementById('raised').innerHTML = document.getElementById('goal').innerHTML;
    }

    var mercury=(raised/goal)*100; // get percentage
    var displayMercury=mercury.toFixed(2); // restrict percentage to 2 places after the decimal
    displayMercury=displayMercury.replace(/\.00/,""); // if the percentage is a whole number, the decimal and zeroes are removed

    document.getElementById('mercury').style.height=mercury*(250/100)+'px'; // display the red mercury in the thermometer
    document.getElementById('mercury').style.top=268.47-(mercury*2.47)+'px'; // position the red mercury in the thermometer
    /*
     if(mercury ==100){
     document.getElementById('mercury').style.display="none";
     document.write('<style>#thermometer{background-image:url("/fullthermometer.jpg");}</style>');
     }
     */
    document.getElementById('snippet1').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet2').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet3').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet4').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet5').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet6').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet7').style.top=(15-mercury*(250/100))+'px';
    document.getElementById('snippet8').style.top=(15-mercury*(250/100))+'px';

    document.getElementById('raised').innerHTML=document.getElementById('raised').innerHTML+"="+100*raised/goal+"%";

}

function showDetail(i)
{
    //set the variable noDetail to be false, so in turnColor function the content of fundDetail will not be flushed
    noDetail = 'false';

    var number = i*1;
    if(number == 1){
        document.getElementById('fundDetail').innerHTML="<span>  $18,840 <br/><br/>Johns Hopkins Medicine and Clinical and Academic Fund<span>";
        document.getElementById('snippet1').style.border = '1px solid #906';}
    if(number == 2){
        document.getElementById('fundDetail').innerHTML="<span>$3,300 <br/><br/> Fellow Stipend - Mohamed Ibrahim, MD (5% effort)     </span>";
        document.getElementById('snippet2').style.border = '1px solid #906';}
    if(number == 3){
        document.getElementById('fundDetail').innerHTML="<span>$8,401 <br/><br/> Part-time Research Assistant (20% effort) </span>";
        document.getElementById('snippet3').style.border = '1px solid #906';}
    if(number == 4){
        document.getElementById('fundDetail').innerHTML="<span>$47,552 <br/><br/> Principal (Lead) Investigator - Ava Bittner, OD, PhD (40% effort)</span>";
        document.getElementById('snippet4').style.border = '1px solid #906';}
    if(number == 5){
        document.getElementById('fundDetail').innerHTML="<span>$1,600 <br/><br/>Acupuncture Needles</span>";
        document.getElementById('snippet5').style.border = '1px solid #906';}
    if(number == 6){
        document.getElementById('fundDetail').innerHTML="<span>$1,600 <br/><br/>Electrodes<span>";
        document.getElementById('snippet6').style.border = '1px solid #906';}
    if(number == 7){
        document.getElementById('fundDetail').innerHTML="<span>$1,000 <br/><br/>Parking Vouchers for study visits/vision tests at our center<span>";
        document.getElementById('snippet7').style.border = '1px solid #906';}
    if(number == 8){
        document.getElementById('fundDetail').innerHTML="<span>$17,706 <br/><br/>Staff Stipend for JHU Acupuncturist - Jeff Gould (25% effort)</span>";
        document.getElementById('snippet8').style.border = '1px solid #906';
    }
    turnColor(colorOption);

}
function eraseDetail()
{
    noDetail = 'true';

    document.getElementById('snippet1').style.border = '0';
    document.getElementById('snippet2').style.border = '0';
    document.getElementById('snippet3').style.border = '0';
    document.getElementById('snippet4').style.border = '0';
    document.getElementById('snippet5').style.border = '0';
    document.getElementById('snippet6').style.border = '0';
    document.getElementById('snippet7').style.border = '0';
    document.getElementById('snippet8').style.border = '0';


    document.getElementById('fundDetail').innerHTML="<span><br/> Please move your mouse on the thermometer to see where the money goes:<br/><br/><span>";


    var img = document.createElement("IMG");
    if(colorOption=='white') img.src = "/greyThermLegend.jpg";
    else                     img.src = "/blackThermLegend.jpg";

    document.getElementById('fundDetail').appendChild(img);

    turnColor(colorOption);
}


/*this area is for the drop down menu*/
var timeout         = 0;
var closetimer		= 0;
var ddmenuitem      = 0;

function nav_open()
{
    nav_canceltimer();
    nav_close();
    ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function nav_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function nav_timer()
{
    document.getElementById('spaceForSubmenue').style.display="none";
    closetimer = window.setTimeout(nav_close, timeout);}

function nav_canceltimer()
{	if(closetimer)
{	window.clearTimeout(closetimer);
    closetimer = null;}}
/*this area is for the drop down menu*/
function moreSpace()
{
    document.getElementById('spaceForSubmenue').style.display="block";
}

/*this part is for fundraising thermometer*/
