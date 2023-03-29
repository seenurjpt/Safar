import React from 'react'
import './Gallery.css'
import gallery_banner from "../assests/gallery/wallpaper.jpg"
import adalaj from "../assests/gallery/Adalaj Stepwell.jfif"
import akshardham from "../assests/gallery/akshardham.jfif"
import amerfort from "../assests/gallery/Amer Fort.jpeg"
import badrinath from "../assests/gallery/badrinath.jpeg"
import atalbridge from "../assests/gallery/atal bridge.jfif"
import Bahubali_hills from "../assests/gallery/Bahubali hills Udaipur.jpeg"
import pamban_bridge from "../assests/gallery/bambam bridge.jfif"
import bangalore from "../assests/gallery/bangalore.jpeg"
import charminar from "../assests/gallery/charminar.jfif"
import chilka_lake from "../assests/gallery/chilika-lake.jpg"
import chittorgardh from "../assests/gallery/Chittorgarh Fort.jpeg"
import dal_lake from "../assests/gallery/dal lake.jfif"
import darhjeeing from "../assests/gallery/darhjeeing.png"
import devprayag from "../assests/gallery/devprayag.jpeg"
import diu from "../assests/gallery/diu.jpg"
import dwarka from "../assests/gallery/dwarka.jfif"
import Dzukou_Valley from "../assests/gallery/Dzukou Valley,Nagaland.jfif"
import gangtok_sikkim from "../assests/gallery/gangtok_sikkim.jfif"
import Gangotri from "../assests/gallery/Gangotri.jfif"
import Ganga_aarti from "../assests/gallery/ganga aarti3.jpeg"
import Gateway from "../assests/gallery/gateway.jpeg"
import Gaurikund from "../assests/gallery/gauri kund.png"
import Girnar from "../assests/gallery/girnar.jfif"
import Goa from "../assests/gallery/goa.jfif"
import Golden_temple from "../assests/gallery/golden temple.jpeg"
import Gwaloir_fort from "../assests/gallery/Gwalior fort.jpeg"
import Haridwar from "../assests/gallery/Haridwar, Uttarakhand.jpeg"
import Hawamahal from "../assests/gallery/hawamahal.jpeg"
import Hirakund from "../assests/gallery/hirakud dam.jfif"
import Howrah_brige from "../assests/gallery/howrah bridge.jfif"
import India_gate from "../assests/gallery/india gate.jfif"
import Jagannath_puri from "../assests/gallery/jagannath puri.jpeg"
import Jaigarth from "../assests/gallery/jaigarh.jpeg"
import Jaisalmer_fort from "../assests/gallery/Jaisalmer Fort.jpeg"
import Jaisalmer_kl from "../assests/gallery/Jaisalmer,.jpeg"
import Jatayu_park from "../assests/gallery/jatayu parl.jpeg"
import kailash_temple from "../assests/gallery/kailash temple.png"
import Himachal_pradesh from "../assests/gallery/Kalpa,Himachal Pradesh,India.png"
import Kanchanjanga  from "../assests/gallery/Kanchanjangha Mountain.jfif"
import Kankariya  from "../assests/gallery/Kankaria Lake.jpeg"
import Kasi  from "../assests/gallery/Kasi.jpeg"
import Kaziranga  from "../assests/gallery/Kaziranga National Park.png"
import Kedarnath from "../assests/gallery/kedarkanth trek.jpeg"
import Kedarnath_temple from "../assests/gallery/Kedarnath temple.jpeg"
import kerala_boathouse from "../assests/gallery/kerala_boathouse.jpg"
import konark_temple from "../assests/gallery/konark sun temple.jpeg"
import kumbhalgadh from "../assests/gallery/kumbhalgarh.jpeg"
import kutub_minar from "../assests/gallery/kutub minar.png"
import ladakh from "../assests/gallery/ladakh.jfif"
import lake_pichola from "../assests/gallery/lake pichola.jpeg"
import lal_chok from "../assests/gallery/lal chowk.jpg"
import leh_ladakh from "../assests/gallery/leh ladakh.jfif"
import mallikarjun from "../assests/gallery/mallikarjun.png"
import manali_hills from "../assests/gallery/manali.jfif"
import manali from "../assests/gallery/manali.jpeg"
import meenakshi_temple from "../assests/gallery/Meenakshi Temple.jpeg"
import mount_abu from "../assests/gallery/mt.abu.jpg"
import nal_sarver from "../assests/gallery/nalsarver.png"
import nadi_hills from "../assests/gallery/nandi hills unsplash.jpg"
import nashik from "../assests/gallery/nashik.jpeg"
import patang_hotel from "../assests/gallery/patang hotel.jfif"
import prem_mandir from "../assests/gallery/Prem Mandir.jpeg"
import rameshrvam from "../assests/gallery/rameshrvam temple.jpg"
import ramsetu from "../assests/gallery/ramsetu.jfif"
import rann_utsav from "../assests/gallery/rann utsav.jfif"
import ranthambhore from "../assests/gallery/ranthambhore national.jpeg"
import rastrapati_bhavan from "../assests/gallery/rastrapati bhavan.jfif"
import red_fort from "../assests/gallery/red fort.jfif"
import flowers from "../assests/gallery/rhododendron flowers_sikkim.jfif"
import rishikesh from "../assests/gallery/rishikesh.jpeg"
import sachi_stupa from "../assests/gallery/sachi stupa.jpeg"
import sahayadri from "../assests/gallery/sahyadri.jpg"
import saputara from "../assests/gallery/saputara.jfif"
import sasan_gir from "../assests/gallery/sasan gir.jpeg"
import sikkim from "../assests/gallery/sikkim.jfif"
import somnath from "../assests/gallery/somnath.jfif"
import statue_unity from "../assests/gallery/statue of unity.jfif"
import sunrise from "../assests/gallery/sunrise.jfif"
import taj_hotel from "../assests/gallery/taj hotel.jfif"
import taj_mahal from "../assests/gallery/tajmahal.jfif"
import Tamilnadu from "../assests/gallery/Tamilnadu temple.jfif"
import Thour from "../assests/gallery/thour national park jawai bndh.jpeg"
import Tirupati from "../assests/gallery/tiruati.jpeg"
import Tungnath from "../assests/gallery/tungnath.jfif"
import varanasi from "../assests/gallery/varanasi.jpeg"
import Vrundavan_holi from "../assests/gallery/vrindavan holi.jpeg"
import wular_lake from "../assests/gallery/wular_lake.jfif"





const Gallery = () => {
  return (
   <>

    <section>
        <div class="banner">
            <img src={gallery_banner} alt="" />
        </div>
        <div class="content">
            <p class="txt">Gallery</p>
            <p class="text">explore  the world with us</p>

        </div>
    </section>

    <div class="wrapper">
        
        
        <div class="gallery mt-5">
            <div class="gallery__item gallery__item--1">
                <a href="" class="gallery__link">
                    <img src={adalaj} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Adalaj</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src={ akshardham} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Akshardham</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src={amerfort} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Amer Fort</span>
                    
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src={badrinath} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Badrinath</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src={atalbridge} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Atal bridge</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src={Bahubali_hills} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Bahubali hills</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--7">
                <a href="#" class="gallery__link">
                    <img src= {pamban_bridge} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Pamban bridge</span>
                    </div>
                </a>
            </div><div class="gallery__item gallery__item--8">
                <a href="#" class="gallery__link">
                    <img src={bangalore} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Bangalore</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--9">
                <a href="#" class="gallery__link">
                    <img src={charminar} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Charminar</span>
                    </div>
                </a>
            </div>
            
            <div class="gallery__item gallery__item--10">
                <a href="#" class="gallery__link">
                    <img src={chilka_lake} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Chilka-lake</span>
                    </div>
                </a>
            </div>
            
            <div class="gallery__item gallery__item--11">
                <a href="#" class="gallery__link">
                    <img src= {chittorgardh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Chittorgarh Fort</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--12">
                <a href="#" class="gallery__link">
                    <img src={dal_lake} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>dAL-lake</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--13">
                <a href="#" class="gallery__link">
                    <img src= {darhjeeing} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Darhjeeing</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--14">
                <a href="#" class="gallery__link">
                    <img src={devprayag} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>devprayag</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--15">
                <a href="#" class="gallery__link">
                    <img src={diu} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>DIU</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--16">
                <a href="#" class="gallery__link">
                    <img src={dwarka} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Dwarka temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--17">
                <a href="#" class="gallery__link">
                    <img src={ Dzukou_Valley} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Dzukou Valley</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--18">
                <a href="#" class="gallery__link">
                    <img src= {gangtok_sikkim} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>gangtok</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--19">
                <a href="#" class="gallery__link">
                    <img src= {Gangotri} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Gangotri</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--20">
                <a href="#" class="gallery__link">
                    <img src={Ganga_aarti} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Ganga aarti</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--21">
                <a href="#" class="gallery__link">
                    <img src={Gateway} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Gateway</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--22">
                <a href="#" class="gallery__link">
                    <img src={Gaurikund} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Gaurikund</span>
                    </div>
                </a>
            </div>

            
            <div class="gallery__item gallery__item--23">
                <a href="#" class="gallery__link">
                    <img src= {Girnar} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Girnar</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--24">
                <a href="#" class="gallery__link">
                    <img src={Goa} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Goa</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--25">
                <a href="#" class="gallery__link">
                    <img src= {Golden_temple} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Golden temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--26">
                <a href="#" class="gallery__link">
                    <img src= { Gwaloir_fort } class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Gwalior fort</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--27">
                <a href="#" class="gallery__link">
                    <img src= {Haridwar} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HARIDWAR</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--29">
                <a href="#" class="gallery__link">
                    <img src= {Hawamahal} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HAVAMAHAL</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--30">
                <a href="#" class="gallery__link">
                    <img src= {Hirakund} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Hirakund</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--31">
                <a href="#" class="gallery__link">
                    <img src= {Howrah_brige} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Howrah bridge</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--32">
                <a href="#" class="gallery__link">
                    <img src= {India_gate} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>India Gate</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--33">
                <a href="#" class="gallery__link">
                    <img src= {Jagannath_puri} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>jagannath puri</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--34">
                <a href="#" class="gallery__link">
                    <img src= {Jaigarth} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>jaigadh</span>
                    </div>
                </a>
            </div>

           

            <div class="gallery__item gallery__item--36">
                <a href="#" class="gallery__link">
                    <img src= {Jaisalmer_fort} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>jaisalmer fort</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--37">
                <a href="#" class="gallery__link">
                    <img src= {Jaisalmer_kl} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>jaisalmer </span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--38">
                <a href="#" class="gallery__link">
                    <img src= {Jatayu_park} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>jatayu park</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--39">
                <a href="#" class="gallery__link">
                    <img src= {kailash_temple} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>kailash temple </span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--40">
                <a href="#" class="gallery__link">
                    <img src= {Himachal_pradesh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Himachal Pradesh </span>
                    </div>
                </a>
            </div>
            
            <div class="gallery__item gallery__item--41">
                <a href="#" class="gallery__link">
                    <img src= {Kanchanjanga} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kanchanjangha Mountain</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--42">
                <a href="#" class="gallery__link">
                    <img src= {Kankariya} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kankariya</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--43">
                <a href="#" class="gallery__link">
                    <img src={Kasi} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kasi</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--44">
                <a href="#" class="gallery__link">
                    <img src= {Kaziranga} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kaziranga park</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--45">
                <a href="#" class="gallery__link">
                    <img src= {Kedarnath} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kedarnath</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--46">
                <a href="#" class="gallery__link">
                    <img src= {Kedarnath_temple} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Kedarnath temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--47">
                <a href="#" class="gallery__link">
                    <img src= {kerala_boathouse} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> kerala boathouse</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--48">
                <a href="#" class="gallery__link">
                    <img src= {konark_temple} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> konark temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--49">
                <a href="#" class="gallery__link">
                    <img src= {kumbhalgadh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> kumbhalgadh</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--50">
                <a href="#" class="gallery__link">
                    <img src= {kutub_minar} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> kutub minar</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--51">
                <a href="#" class="gallery__link">
                    <img src= {ladakh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Ladakh</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--52">
                <a href="#" class="gallery__link">
                    <img src= {lake_pichola} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> pichola lake</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--53">
                <a href="#" class="gallery__link">
                    <img src= {lal_chok} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> lal chowk</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--54">
                <a href="#" class="gallery__link">
                    <img src= {leh_ladakh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> leh ladakh</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--55">
                <a href="#" class="gallery__link">
                    <img src= {mallikarjun} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>mallikarjun</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--56">
                <a href="#" class="gallery__link">
                    <img src= {manali_hills} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> manali hill</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--57">
                <a href="#" class="gallery__link">
                    <img src= {manali} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> manali</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--58">
                <a href="#" class="gallery__link">
                    <img src= {meenakshi_temple} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> meenakshi temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--59">
                <a href="#" class="gallery__link">
                    <img src= {mount_abu} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>mount abu</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--60">
                <a href="#" class="gallery__link">
                    <img src= {nal_sarver} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> nalsarover</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--61">
                <a href="#" class="gallery__link">
                    <img src= {nadi_hills} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> nandi hills</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--62">
                <a href="#" class="gallery__link">
                    <img src= {nashik} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> nashik</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--63">
                <a href="#" class="gallery__link">
                    <img src= {patang_hotel} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> patang hotel</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--64">
                <a href="#" class="gallery__link">
                    <img src= {prem_mandir} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> prem mandir</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--65">
                <a href="#" class="gallery__link">
                    <img src= {rameshrvam} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> rameshrvam temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--66">
                <a href="#" class="gallery__link">
                    <img src= {ramsetu} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> ram setu</span>
                    </div>
                </a>
            </div>  <div class="gallery__item gallery__item--67">
                <a href="#" class="gallery__link">
                    <img src= {rann_utsav} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> ran utsav</span>
                    </div>
                </a>
            </div>  <div class="gallery__item gallery__item--68">
                <a href="#" class="gallery__link">
                    <img src= {ranthambhore} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Ranthambhore</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--69">
                <a href="#" class="gallery__link">
                    <img src= {rastrapati_bhavan} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> rastrapati bhavan</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--70">
                <a href="#" class="gallery__link">
                    <img src= {red_fort} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> Red fort</span>
                    </div>
                </a>
            </div>

            <div class="gallery__item gallery__item--71">
                <a href="#" class="gallery__link">
                    <img src= {flowers} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> rhododendron flowers</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--72">
                <a href="#" class="gallery__link">
                    <img src= {rishikesh} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> rishikesh</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--73">
                <a href="#" class="gallery__link">
                    <img src= {sachi_stupa} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>sachi stupa</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--74">
                <a href="#" class="gallery__link">
                    <img src= {sahayadri} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>sahayadri</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--75">
                <a href="#" class="gallery__link">
                    <img src={saputara} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> saputara</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--76">
                <a href="#" class="gallery__link">
                    <img src= {sasan_gir} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>sasan gir</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--77">
                <a href="#" class="gallery__link">
                    <img src= {sikkim} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>sikkim</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--78">
                <a href="#" class="gallery__link">
                    <img src= {somnath} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>somnath temple</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--79">
                <a href="#" class="gallery__link">
                    <img src= {statue_unity} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>statue of unity</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--80">
                <a href="#" class="gallery__link">
                    <img src= {sunrise} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>sunrise</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--81">
                <a href="#" class="gallery__link">
                    <img src= {taj_hotel} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>taj hotel</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--82">
                <a href="#" class="gallery__link">
                    <img src= {taj_mahal} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>tajmahal</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--83">
                <a href="#" class="gallery__link">
                    <img src= {Tamilnadu} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Tamilnadu</span>
                    </div>
                </a>
            </div> <div class="gallery__item gallery__item--84">
                <a href="#" class="gallery__link">
                    <img src= {Thour} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>thour national park</span>
                    </div>
                </a>
            </div> <div class="gallery__item gallery__item--85">
                <a href="#" class="gallery__link">
                    <img src= {Tirupati} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>tiruati </span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--86">
                <a href="#" class="gallery__link">
                    <img src= {Tungnath} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>tungnath</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--87">
                <a href="#" class="gallery__link">
                    <img src= {varanasi} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span> varansi</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--88">
                <a href="#" class="gallery__link">
                    <img src= {Vrundavan_holi} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Vrundavan holi</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--89">
                <a href="#" class="gallery__link">
                    <img src={wular_lake} class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>wular lake</span>
                    </div>
                </a>
            </div>
        </div>
        

    </div>

 
   </>
  )
}

export default Gallery
