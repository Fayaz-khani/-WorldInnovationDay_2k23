<template>
    <div>
        <v-container fluid class="CustomHeader">
            <v-row class="pa-6">
                <v-col cols="8" dark>
                    <h1 class="MainText">
                        WE ARE MORE THAN JUST A CARBON CALCULATOR
                    </h1>
                    <p class="mt-8 MainPara">Our software and sustainability services increases the quality and accuracy of
                        your carbon footprint
                        results.
                    </p>
                </v-col>
                <v-col cols="4">
                    <img src="../../assets/images/greenLogo.png" alt="">
                </v-col>
            </v-row>
        </v-container>


        <v-container>
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10">
                        HOW TO CALCULATE YOUR CARBON FOOTPRINT
                    </h1>
                    <img src="../../assets/images/main/leaf-green.png" alt="">
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class=" border-right customCard">
                        <img src="../../assets/images/main/webData.png" alt="">
                        <v-card-title class="green--text justify-center">
                            ENTER YOUR DATA
                        </v-card-title>
                        <v-card-text>Upload your data from energy, water, waste, travel, freight, manufacturers, materials
                            purchased, cloud host providers and much more.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class=" border-right customCard">
                        <img src="../../assets/images/main/phoData.png" alt="">
                        <v-card-title class="green--text justify-center">
                            INSTANT RESULTS
                        </v-card-title>
                        <v-card-text>In the past, this was the hard part. Our software completes it all for you to create
                            your organisation’s scope 1, 2, and 3 emissions reports.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class=" border-right ">
                        <img src="../../assets/images/main/boardData.png" alt="">
                        <v-card-title class="green--text justify-center">
                            COMPARE YOUR FOOTPRINT
                        </v-card-title>
                        <v-card-text>Now you know your carbon footprint, use your baseline to set targets and compare
                            results year-on-year, or more regularly, to monitor your progress.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-divider class="mt-16  pt-16"></v-divider>
        <!-- <hr class="my-16 pt-16"> -->

        <v-container>
            <v-row>
                <v-col cols="8" class="text-center">
                    <h1 class="mt-10">
                        SIGN UP TO VIEW DEMO
                    </h1>
                    <img src="../../assets/images/main/leaf-green.png" alt="">


                    <blockquote class="text-start">
                        <p>&nbsp;</p>
                        <span class="pa-2"><img src="../../assets/images/main/openQuotes.png" alt=""></span>
                        <span><strong>The journey for us has been really transformational. We’ve been measuring and
                                accounting
                                for our carbon footprint for a few years now, but it’s really only been this year once we
                                started using the Compare Your Footprint calculator that I’ve had real confidence in the
                                measurements. This has enabled us to account for historic carbon and confidently set our
                                targets for the future.</strong></span>
                        <br>
                        <span>Gavin Shinfield, Founder &amp; CSO at Kyan</span>
                        <span class="pa-2"><img src="../../assets/images/main/closeQuotes.png" alt=""></span>

                    </blockquote>


                </v-col>

                <v-col cols="4">
                    <v-card elevation="0" tile class="pa-3  CustomHeader">
                        <v-card-text>
                            <label class="white--text" for="fullName">Full Name*</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="fullName"></v-text-field>
                            <label class="white--text" for="email">Email*</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="email"></v-text-field>
                            <label class="white--text" for="phone">Phone*</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="phone"></v-text-field>
                            <label class="white--text" for="organisation">Organisation*</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="organisation"></v-text-field>
                            <label class="white--text" for="jobtitle">Job Title*</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="jobtitle"></v-text-field>


                            <label class="white--text" for="aboutSelect">How did you hear about us?</label>
                            <!-- <v-text-field hide-details dense class="my-input white mb-2" id="aboutSelect"></v-text-field> -->
                            <v-select class="white" dense hide-details :items="options" clearable tile></v-select>
                            <label class="white--text" for="about">How did you hear about us (other)?</label>
                            <v-text-field hide-details dense class="my-input white mb-2" id="about"></v-text-field>

                            <v-btn color="#33C2EA" class="rounded my-3" dark tile large depressed>
                                Submit
                            </v-btn>

                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>


        <v-container fluid class="GreenBg">
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10">
                        FEATURES
                    </h1>
                    <img src="../../assets/images/darkblue_leaf.png" class="mt-5" width="100px" alt="">
                </v-col>
            </v-row>


            <v-row class="text-center">
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-01.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Measure all GHG Protocol scopes 1, 2 and 3 emissions
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-02.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Over 10,000 worldwide carbon factors
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/UnlimitedUsers_Icon.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Unlimited users
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-06.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Fair pricing for all types of organisationss
                    </v-card-title>
                </v-col>

            </v-row>

            <v-row class="text-center">
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-10.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Step-by-step guidance through the software and bolt-on consultancy services
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/Upload_White.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Ability to upload large volumes of data
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-05.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Annual results


                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-08.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Streamlined Energy & Carbon Reporting (SECR)
                    </v-card-title>
                </v-col>

            </v-row>

            <v-row class="text-center">
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-09.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Results can be used for SECR, EcoVadis, CDP, GRI, TCFD, GLEC & BIA
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-11.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Download results via Excel or PDF
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/Group-1237.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Integrate with accounting software
                    </v-card-title>
                </v-col>
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/Truck.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Travel distances calculated
                    </v-card-title>
                </v-col>

            </v-row>
            <v-row class="text-center">
                <v-col cols="3" cols-md="6">
                    <img src="../../assets/images/FeaturesIcons/FeaturesIcons-01.png" width="120" alt="">
                    <v-card-title class="subtitle-1 justify-center">
                        Measure all GHG Protocol scopes 1, 2 and 3 emissions
                    </v-card-title>
                </v-col>


            </v-row>
        </v-container>

        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="text-center mt-10">

                    <img src="../../assets/images/ODDBOX_LOGO_VECTOR_BLACK-705x225-1.png" width="150px" alt="">

                    <blockquote class="text-center">
                        <p>&nbsp;</p>
                        <span class="pa-2"><img src="../../assets/images/main/openQuotes.png" alt=""></span>
                        <span><strong class="quotesText">The journey for us has been really transformational. We’ve been
                                measuring and
                                accounting
                                for our carbon footprint for a few years now, but it’s really only been this year once we
                                started using the Compare Your Footprint calculator that I’ve had real confidence in the
                                measurements. This has enabled us to account for historic carbon and confidently set our
                                targets for the future.</strong></span>
                        <br>
                        <span>Gavin Shinfield, Founder &amp; CSO at Kyan</span>
                        <span class="pa-2"><img src="../../assets/images/main/closeQuotes.png" alt=""></span>

                    </blockquote>
                </v-col>
            </v-row>
        </v-container>

        <!-- Case Study -->
        <v-container fluid class="blueBg mt-10 pb-13">
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10 mb-2 white--text">
                        CASE STUDIES
                    </h1>
                    <img src="../../assets/images/main/leaf-green.png" alt="">
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg customRightBorder">
                        <img src="../../assets/images/Oddbox_Green.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            ODDBOX
                        </v-card-title>
                        <v-card-text class="white--text">
                            Oddbox is a proud B-Corporation rescuing "too-wonky" and "too-many" fruit and vegetables direct
                            from farmers.
                            <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                                View Case Study
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg customRightBorder">
                        <img src="../../assets/images/Coffey.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            J COFFEY
                        </v-card-title>
                        <v-card-text class="white--text">
                            Leading construction company based in the UK.
                            <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                                View Case Study
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg ">
                        <img src="../../assets/images/Internet.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            INTERNET FUSION GROUP
                        </v-card-title>
                        <v-card-text class="white--text">
                            IFG is a global e-commerce niche retailer with a rich mix of technology, creativity, and
                            innovation.
                            <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                                View Case Study
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>

        <!-- Get in Touch -->
        <v-container fluid class="my-10">
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10">
                        Get in touch to discuss your requirements
                    </h1>
                    <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                        Chat to us
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>


        <!-- Additional Sustainability Services -->
        <v-container fluid class="blueBg mt-10 pb-13">
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10 mb-2 white--text">

                        ADDITIONAL SUSTAINABILITY SERVICES
                    </h1>
                    <img src="../../assets/images/main/leaf-green.png" alt="">
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg customRightBorder">
                        <img src="../../assets/images/bgCard1.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            STARTER
                        </v-card-title>
                        <v-card-text class="white--text">
                            Includes support to identify and collect your data, review and enhancement of uploaded data, and
                            general sustainability strategy
                        </v-card-text>
                        <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                            Book Meeting
                        </v-btn>

                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg customRightBorder">
                        <img src="../../assets/images/bgCard2.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            PREMIUM
                        </v-card-title>
                        <v-card-text class="white--text">
                            Presentation to cover your carbon footprint, emissions hotspots, high-level recommendations on
                            how to reduce your emissions, and reductions targets set in line with the Science Based Targets
                            initiative.
                        </v-card-text>
                        <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                            Book Meeting
                        </v-btn>

                    </v-card>
                </v-col>
                <v-col cols="4" cols-md="6">
                    <v-card elevation="0" class="blueBg ">
                        <img src="../../assets/images/bgCard4.png" width="200" alt="">
                        <v-card-title class="green--text justify-center">
                            COMPREHENSIVE
                        </v-card-title>
                        <v-card-text class="white--text">
                            Green Element is a successful environmental management consultancy with bespoke sustainability
                            services to help reduce your organisational emissions.

                        </v-card-text>
                        <v-btn depressed raised color="#33C2EA" class="mt-5 black--text ">
                            Book Meeting
                        </v-btn>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>


        <!-- FAQ Section -->

        <v-container fluid class="blueBg pb-13">
            <v-row>
                <v-col class="text-center">
                    <h1 class="mt-10 mb-2 white--text">

                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <img src="../../assets/images/main/leaf-green.png" alt="">
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <!-- </v-expansion-panel> -->
                    <template>
                        <v-expansion-panels flat dark class="blueBg" elevation="0">
                            <v-expansion-panel flat dark class="blueBg">


                                <!-- Question -- 01 -->
                                <v-expansion-panel-header elevation="0" @click="togglePanel1" :disable-icon-rotate="false">
                                    <div class="d-flex align-center justify-start">
                                        <!-- Icon for panel open state -->
                                        <v-icon class="mr-4 green--text display-1">{{ panelOpen1 ? 'mdi-minus' : 'mdi-plus'
                                        }}</v-icon>
                                        <span class="title"> How do I use Compare Your Footprint? </span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-show="togglePanel1">
                                    Our demo video offers a quick step-by-step guide to using our software. More detailed
                                    guidance will be available within your Compare Your Footprint account and our team on
                                    hand to support you.
                                </v-expansion-panel-content>

                            </v-expansion-panel>


                            <!-- Question -- 02 -->
                            <v-expansion-panel flat dark class="blueBg">

                                <v-expansion-panel-header elevation="0" @click="Pane2" :disable-icon-rotate="false">
                                    <div class="d-flex align-center justify-start">
                                        <!-- Icon for panel open state -->
                                        <v-icon class="mr-4 green--text display-1">{{ pan2 ? 'mdi-minus' : 'mdi-plus'
                                        }}</v-icon>
                                        <!-- <v-icon class="mr-4 green--text display-1">mdi-plus
                                        </v-icon> -->
                                        <span class="title"> Waht data do you measure? </span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-show="pan2">
                                    Compare Your Footprint measures usage data to cover Scopes 1, 2 and 3 emissions. See
                                    relevant FAQ for more information.

                                    Each year the UK government publishes an updated set of greenhouse gas emission
                                    conversion factors for calculating carbon scope 1, 2, and 3 emissions for a range of
                                    activities and processes. Compare Your Footprint uses this set of average carbon factors
                                    for UK-based organisations, and where relevant also for some international operations,
                                    in the Greenhouse Gas (GHG) Protocol average data method.

                                    View our Usage Data Guide to see a the complete list of factors and an explanation of
                                    how to gather the data.
                                </v-expansion-panel-content>
                            </v-expansion-panel>



                            <!-- Question -- 03 -->
                            <v-expansion-panel flat dark class="blueBg" v-model="activePanel">

                                <v-expansion-panel-header elevation="0" @click="togglePanel3" :disable-icon-rotate="false">
                                    <div class="d-flex align-center justify-start">
                                        <!-- Icon for panel open state -->
                                        <v-icon class="mr-4 green--text display-1">{{ panelOpen3 ? 'mdi-minus' : 'mdi-plus'
                                        }}</v-icon>
                                        <!-- <v-icon class="mr-4 green--text display-1">mdi-plus
                                        </v-icon> -->
                                        <span class="title"> How do you work out the corbon calculation?</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-show="panelOpen3">
                                    Compare Your Footprint (CYF) adheres to the greenhouse gas accounting standard
                                    Greenhouse Gas Protocol (GHGP) Corporate Accounting and Reporting Standard developed by
                                    the World Resources Institute (WRI) and the World Business Council for Sustainable
                                    Development (WBCSD), which is the global standard for calculating corporate GHG
                                    emissions.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <!-- Question -- 04 -->
                            <v-expansion-panel flat dark class="blueBg" v-model="activePanel">

                                <v-expansion-panel-header elevation="0" @click="togglePanel4" :disable-icon-rotate="false">
                                    <div class="d-flex align-center justify-start">
                                        <!-- Icon for panel open state -->
                                        <v-icon class="mr-4 green--text display-1">{{ panelOpen4 ? 'mdi-minus' : 'mdi-plus'
                                        }}</v-icon>
                                        <!-- <v-icon class="mr-4 green--text display-1">mdi-plus
                                        </v-icon> -->
                                        <span class="title"> Do you measure Scope, 1, 2 and 3 emisions?</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-show="panelOpen4">
                                    We are around 80% cheaper than using a consultant to carbon footprint your organisation.
                                    Cheaper doesn’t mean less accurate results. We use over 20 years sustainability
                                    experience to offer over 10,000 worldwide carbon factors that adhere to the GHG Protocol
                                    to offer more accurate and comprehensive reporting.

                                    Our direct pricing is based on the turnover of your organisation to make it fair and we
                                    offer free access to our software for organisations with under £300k turnover.


                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <!-- Question -- 05 -->
                            <v-expansion-panel flat dark class="blueBg" v-model="activePanel">

                                <v-expansion-panel-header elevation="0" @click="togglePanel5" :disable-icon-rotate="false">
                                    <div class="d-flex align-center justify-start">
                                        <!-- Icon for panel open state -->
                                        <v-icon class="mr-4 green--text display-1">{{ panelOpen5 ? 'mdi-minus' : 'mdi-plus'
                                        }}</v-icon>
                                        <!-- <v-icon class="mr-4 green--text display-1">mdi-plus
                                        </v-icon> -->
                                        <span class="title"> How much it Cost?</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content v-show="panelOpen5">
                                    Yes! We think it is important to include Scope 3 in your results because it is usually
                                    the greatest share of your carbon footprint.

                                    Many people ask us is what is the difference between scope 1, 2 and 3 emissions?
                                    Emissions are broken down into three categories by the Greenhouse Gas Protocol in order
                                    to better understand the source.

                                    Scope 1 – All Direct Emissions from the activities of an organisation or under their
                                    control. Including fuel combustion on site such as gas boilers, fleet vehicles and
                                    air-conditioning leaks.

                                    Scope 2 – Indirect Emissions from electricity purchased and used by the organisation.
                                    Emissions are created during the production of the energy and eventually used by the
                                    organisation.

                                    Scope 3 – All Other Indirect Emissions from activities of the organisation, occuring
                                    from sources that they do not own or control. These cover emissions associated with
                                    business travel, procurement, waste and water.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </v-col>
            </v-row>
        </v-container>



    </div>
</template>



<script>

export default {
    name: 'MainComp',
    data: () => ({
        panelOpen1: false,
        pan2: false,
        panelOpen3: false,
        panelOpen4: false,
        panelOpen5: false,
        options: ['Google', 'You Tube', 'LinkedIn', 'FaceBook', 'Twitter'],
    }),

    methods: {
        togglePanel1() {
            this.panelOpen1 = !this.panelOpen1;
            this.pan2= false;
            this.panelOpen3= false;
            this.panelOpen4= false;
            this.panelOpen5= false;
        },
        Pane2() {
            
            this.pan2 = !this.pan2;
            this.panelOpen1 = false;
            this.panelOpen3= false;
            this.panelOpen4= false;
            this.panelOpen5= false;
        },
        togglePanel3() {
            this.panelOpen3 = !this.panelOpen3;
            this.pan2= false;
            this.panelOpen1= false;
            this.panelOpen4= false;
            this.panelOpen5= false;
        },
        togglePanel4() {
            this.panelOpen4 = !this.panelOpen4;
            this.pan2= false;
            this.panelOpen3= false;
            this.panelOpen1= false;
            this.panelOpen5= false;
        },
        togglePanel5() {
            this.panelOpen5 = !this.panelOpen5;
            this.pan2= false;
            this.panelOpen3= false;
            this.panelOpen4= false;
            this.panelOpen1= false;
        },
    },
};
</script>
