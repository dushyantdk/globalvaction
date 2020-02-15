<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/App.css">
    <link rel="stylesheet" href="css/animate.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet"> 
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <title>Index</title>
    <style>
        .message {
            margin: auto;
            padding: 2em;
            transition: 0.4s;
            font-size: 25px;
            color: #317aca;
        }
    </style>
  </head>
  <body>
    <section class="header-block">
       <div class="container">
          <div class="row">
             <div class="col-lg-12 d-flex justify-content-between"><a href="/" class="logo nav-link"><img src="img/logo.png" alt="logo"></a><a class="contact-us" href="#footer">Contact Us</a></div>
          </div>
       </div>
    </section>
    <section class="banner-home">
       <div class="banner-box">
          <h1>The Global Tourism &amp; Resorts</h1>
          <h2>YOUR TRUSTED TRAVEL PARTNER</h2>
          <p class="font-16">We offer matchless services to the business and tourist travellers. Since our inception pre-independence, provided highly efficient chauffeur driven cars &amp; coaches. We assure seamless authentic services, assuring you the best of your vacations bundled with moments to be cherished forever.</p>
       </div>
    </section>
    <section class="search-section">
       <div class="container">
          <div class="row">
             <div class="col-lg-12">
                <div class="search-bg">
                   <div class="form-block">
                    <div class="row">
                      <div class="col-lg-12">
                          <div class="d-flex justify-content-center nav nav-pills" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="first-tab" data-toggle="tab" href="#first"  role="tab" aria-controls="first-tab" aria-selected="true"><img src="img/address-pickup.png" alt="local"></a>
                            <a class="nav-item nav-link" id="second-tab" data-toggle="tab" href="#second"  role="tab" aria-controls="second-tab" aria-selected="true"><img src="img/address-pickup.png" alt="local"></a>
                            <a class="nav-item nav-link" id="third-tab" data-toggle="tab" href="#third"  role="tab" aria-controls="third-tab" aria-selected="true"><img src="img/address-pickup.png" alt="local"></a>
                            <a class="nav-item nav-link" id="fourth-tab" data-toggle="tab" href="#fourth"  role="tab" aria-controls="fourth-tab" aria-selected="true"><img src="img/address-pickup.png" alt="local"></a>
                            
                          </div>
                      </div> 
                      <div class="col-lg-12">   
                        <div class="tab-content" id="nav-tabContent">
                          <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                            <form class="search-from" method="post" action="email.php">
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="From" type="text" name="from" id="from_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="To" type="text" name="to" id="to_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="PickUp" type="text" name="pickup" id="pickup_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="DropUp" type="text" name="dropup" id="dropup_f" class="form-control" required></div>
                                     </div>
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="Name" type="text" name="name" id="name_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Contact No" type="text" name="contact" id="contactno_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Email" type="email" name="email" id="email_f" class="form-control" required></div>
                                        <div class="col-lg-3 form-group">
                                           <div role="toolbar" class="btn-toolbar"><button type="submit" name="first_tab"><img src="img/submit-btn.png" alt="Submit Button" title="Get Estimate"></button></div>
                                        </div>
                                     </div>
                            </form>
                          </div>
                          <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                            <form class="search-from" method="post" action="email.php">
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="From" type="text" name="from" id="from_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="To" type="text" name="to" id="to_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="PickUp" type="text" name="pickup" id="pickup_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="DropUp" type="text" name="dropup" id="dropup_s" class="form-control" required></div>
                                     </div>
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="Name" type="text" name="name" id="name_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Contact No" type="text" name="contact" id="contactno_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Email" type="email" name="email" id="email_s" class="form-control" required></div>
                                        <div class="col-lg-3 form-group">
                                           <div role="toolbar" class="btn-toolbar"><button type="submit" name="second_tab"><img src="img/submit-btn.png" alt="Submit Button" title="Get Estimate"></button></div>
                                        </div>
                                     </div>
                            </form>
                          </div>
                          <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                             <form class="search-from" method="post" action="email.php">
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="From" type="text" name="from" id="from_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="To" type="text" name="to" id="to_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="PickUp" type="text" name="pickup" id="pickup_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="DropUp" type="text" name="dropup" id="dropup_t" class="form-control" required></div>
                                     </div>
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="Name" type="text" name="name" id="name_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Contact No" type="text" name="contact" id="contactno_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Email" type="email" name="email" id="email_t" class="form-control" required></div>
                                        <div class="col-lg-3 form-group">
                                           <div role="toolbar" class="btn-toolbar"><button type="submit" name="third_tab"><img src="img/submit-btn.png" alt="Submit Button" title="Get Estimate"></button></div>
                                        </div>
                                     </div>
                             </form>
                          </div>
                          <div class="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">
                             <form class="search-from" method="post" action="email.php">
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="From" type="text" name="from" id="from_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="To" type="text" name="to" id="to_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="PickUp" type="text" name="pickup" id="pickup_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="DropUp" type="text" name="dropup" id="dropup_ft" class="form-control" required></div>
                                     </div>
                                     <div class="form-row">
                                        <div class="col-lg-3 form-group"><input placeholder="Name" type="text" name="name" id="name_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Contact No" type="text" name="contact" id="contactno_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group"><input placeholder="Email" type="email" name="email" id="email_ft" class="form-control" required></div>
                                        <div class="col-lg-3 form-group">
                                           <div role="toolbar" class="btn-toolbar"><button type="submit" name="fourth_tab"><img src="img/submit-btn.png" alt="Submit Button" title="Get Estimate"></button></div>
                                        </div>
                                     </div>
                             </form>
                          </div>
                        </div>
                      </div>
                      <?php 
                          if(isset($_GET['success']))
                          { ?>
                      <div class="message">
                        <?php
                          echo "Email Sent successfully";
                          ?>
                      </div>
                      <?php 
                      }
                      ?>
                    </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section class="travel-partner-section">
       <div class="container">
          <div class="row">
             <div class="col-lg-12">
                <div class="travel-partner">
                   <h3>YOUR HOLIDAY <span>PLANNER</span></h3>
                   <h2>Global Tourism &amp; Resorts</h2>
                   <a class="contact-us" href="#footer">Contact Us</a>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section class="why-we-us">
       <div class="container">
          <div class="row">
             <div class="col-lg-8">
                <div class="why-title">
                   <h2>Why We <span>Are</span></h2>
                   <p>We are one of the few Indian Travel company, who own and operate their own fleet of 150+ automobiles, all of which are less than two years old, all of which are driven by full time company employees, uniformed chauffeurs, who speak and understand workable English. Over the years, we have developed excellent working relationships with top Online Trip brands of India.</p>
                </div>
                <div class="row mt-4">
                   <div class="col-lg-3 col-md-6">
                      <div class="wh-block">
                         <div class="wh-block-img"><img src="img/why-icon-1.png" alt="WhyIcon1"></div>
                         <h4>1 Million</h4>
                         <p>Kilometres CLOCKED EVERY MONTH</p>
                      </div>
                   </div>
                   <div class="col-lg-3 col-md-6">
                      <div class="wh-block">
                         <div class="wh-block-img"><img src="img/why-icon-2.png" alt="WhyIcon1"></div>
                         <h4>+100 Cities</h4>
                         <p>Covered with our clients for Enjoyable trips</p>
                      </div>
                   </div>
                   <div class="col-lg-3 col-md-6">
                      <div class="wh-block">
                         <div class="wh-block-img"><img src="img/why-icon-3.png" alt="WhyIcon1"></div>
                         <h4>70 YEARS</h4>
                         <p>Experience in chauffeuring tough terrains</p>
                      </div>
                   </div>
                   <div class="col-lg-3 col-md-6">
                      <div class="wh-block">
                         <div class="wh-block-img"><img src="img/why-icon-4.png" alt="WhyIcon1"></div>
                         <h4>+150 CABS</h4>
                         <p>Spotless vehicles in safe hands and so are you</p>
                      </div>
                   </div>
                </div>
                <div class="row mt-5">
                   <div class="col-lg-12"><a class="explore-now" href="#footer">Explore Now!</a></div>
                </div>
             </div>
             <div class="col-lg-4">
                <div class="why-img"><img src="img/man.png" alt="Why"></div>
             </div>
          </div>
       </div>
    </section>
    <section class="our-benefits sec-pd">
       <div class="container">
          <div class="row">
             <div class="col-sm-12">
                <div class="section-title">
                   <h2>NOTABLE FEATURES</h2>
                </div>
             </div>
          </div>
          <div class="row">
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/fixed-price.png" alt="Fixed Price">
                   <h3>Spirited Rates</h3>
                   <p>BEST PRICE GUARANTEE</p>
                </div>
             </div>
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/safe-drive.png" alt="No Fee">
                   <h3>Safe Drive</h3>
                   <p>All cars equipped with safety features i.e. Airbags / ABS / EBD</p>
                </div>
             </div>
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/gps.png" alt="100% Pleasure">
                   <h3>GPS Monitoring</h3>
                   <p>24X7 in our office by dedicated staff for SAFETY of guests</p>
                </div>
             </div>
          </div>
          <div class="row">
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/nationwide.png" alt="Nationwide">
                   <h3>Professional</h3>
                   <p>Courteous, well mannered &amp; uniformed Chauffeurs</p>
                </div>
             </div>
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/pleasure.png" alt="Easy to use">
                   <h3>Happy Clients</h3>
                   <p>More than 100K+ satisfied customers across India</p>
                </div>
             </div>
             <div class="col-md-4">
                <div class="benefits-colm">
                   <img src="img/support.png" alt="100% Pleasure">
                   <h3>Top Notch Support</h3>
                   <p>Our team will assist you even you need us while travelling</p>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section class="thingstodo">
       <div class="container">
          <div class="row">
             <div class="col-sm-8">
                <div class="row">
                   <div class="singleWedo">
                      <div class="col-sm-6 p-0">
                         <div class="wedoImg"><img src="img/1.jpg" alt=""></div>
                      </div>
                      <div class="col-sm-6">
                         <div class="text-block">
                            <h2>YOUR TRIP <span>PLAN</span></h2>
                            <p>You have a plan for your favourite destination and we align cab and chauffeur for care-free travel</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="row">
                   <div class="singleWedo mobile-reverse">
                      <div class="col-sm-6">
                         <div class="text-block">
                            <h2>CONTACT <span>YOU</span></h2>
                            <p>We will message you and your trip planner, our chauffeur will call you and finalise pickup location</p>
                         </div>
                      </div>
                      <div class="col-sm-6 p-0">
                         <div class="wedoImg"><img src="img/2.jpg" alt=""></div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="col-sm-4">
                <div class="row">
                   <div class="singleWedo">
                      <div class="col-lg-12 p-0">
                         <div class="wedoImg"><img src="img/3.jpg" alt=""></div>
                      </div>
                      <div class="col-lg-12">
                         <div class="text-block">
                            <h2>ENJOY YOUR <span>TRAVEL</span></h2>
                            <p>Our trained chauffeur will follow your trip plan and take you to all must visit sites</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div class="row mt-4 pt-4 justify-content-center">
             <div class="col-lg-2"><a class="explore-now w-100" href="#footer">Explore Now!</a></div>
          </div>
       </div>
    </section>
    <section class="how-we-work">
       <div class="container">
          <div class="row justify-content-center text-center mb-5">
             <div class="col-lg-9">
                <div class="how-we-title">
                   <h2>HOW WE <span>WORK</span></h2>
                   <p class="font-14">All you need is to tell us the dates and your itinerary. We do the rest. Right from planning transportation, our dedicated team of experts will make sure the trip is a smooth ride for you and your family. A 24*7 onsite team is dedicated for the clients until we drop them to their drop location. </p>
                </div>
             </div>
          </div>
          <div class="row">
             <div class="col-md-4">
                <div class="work-block">
                   <div class="work-icon"><img src="img/search.png" alt=""></div>
                   <div class="work-info">
                      <h3>YOUR TRIP PLAN</h3>
                      <p> You have a plan for your favourite destination and we align cab and chauffeur for care-free travel</p>
                   </div>
                </div>
             </div>
             <div class="col-md-4">
                <div class="work-block">
                   <div class="work-icon"><img src="img/car.png" alt=""></div>
                   <div class="work-info">
                      <h3>CONTACT YOU</h3>
                      <p>We will message you and your trip planner, our chauffeur will call you and finalise pickup location</p>
                   </div>
                </div>
             </div>
             <div class="col-md-4">
                <div class="work-block">
                   <div class="work-icon"><img src="img/pay.png" alt=""></div>
                   <div class="work-info">
                      <h3>ENJOY YOUR TRAVEL</h3>
                      <p>Our trained chauffeur will follow your trip plan and take you to all must visit sites</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>


<section class="clients">
   <div class="container">
      <div class="row justify-content-center text-center mb-5">
         <div class="col-lg-9">
            <div class="how-we-title">
               <h2>Our <span>Prestigious</span> Clients</h2>
            </div>
         </div>
      </div>
      <div class="row justify-content-center text-center mb-5">
         <div class="col-lg-9">
            <ul>
               <li><img src="img/maketrip.jpg" alt=""></li>
               <li><img src="img/oyo.jpg" alt=""></li>
               <li><img src="img/thomas.jpg" alt=""></li>
               <li><img src="img/yatra.jpg" alt=""></li>
               <li><img src="img/timesofindia.jpg" alt=""></li>
            </ul>
         </div>
      </div>
   </div>
</section>


<footer id="footer">
   <div class="container">
      <div class="row">
         <div class="col-lg-6">
            <div class="address-title">
               <h1>Let’s Get in<span>Touch</span></h1>
            </div>
            <div class="address-block">
               <h4>VISIT US OR CALL US:</h4>
               <ul>
                  <li class="font-32">Global Tourism &amp; Resorts </li>
                  <li>SCO - 188-190, Sec-34A, Ground Floor, Chandigarh</li>
                  <li>+91 172 401 2779</li>
                  <li>+91 8699 12370-73, 9357 580 005</li>
                  <li><a href="/" class="nav-link">info@exploreholidays.in</a><a href="/" class="nav-link">transport@exploreholidays.in</a></li>
               </ul>
            </div>
            <div class="follow-block">
               <h4>Follow Us On:</h4>
               <ul>
                  <li><a href="https://www.facebook.com/Global-Tourism-Resorts-108930407321637/"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/viky_global/"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/the-global-tourism-resorts"><i class="fab fa-linkedin"></i></a></li>
                  <li><a href="https://twitter.com/VikramK61128786"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.tripadvisor.in/Attraction_Review-g297596-d20045917-Reviews-GLOBAL_Travels-Chandigarh.html"><i class="fab fa-tripadvisor"></i></a></li>
               </ul>
            </div>
         </div>
         <div class="col-lg-6">
            <div class="contact-from">
               <form class="" method="post" action="email.php">
                  <div class="form-group"><input placeholder="NAME" type="text" name="name" id="name_c" class="form-control" required></div>
                  <div class="form-group"><input placeholder="PHONE" type="text" name="phone" id="phone_c" class="form-control" required></div>
                  <div class="form-group"><input placeholder="EMAIL" type="email" name="email" id="email_c" class="form-control" required></div>
                  <div class="form-group"><textarea placeholder="MESSAGE" rows="4" name="message" id="message_c" class="form-control"></textarea></div>
                  <button type="submit" name="contactus" class="Send-btn btn btn-primary">Send Now</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</footer>

    <script src="js/jquery-3.3.1.slim.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
  </body>
</html>
