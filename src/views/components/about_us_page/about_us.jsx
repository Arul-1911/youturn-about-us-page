import React from 'react'
import About_us_header from './about_us_header/about_us_header'
import HeaderBar from '../auth/header_bar.jsx/header_bar'
import About_us_our_mission from './about_us_our_mission/about_us_our_mission'
import About_us_meet_the_team from './about_us_meet_the_team/about_us_meet_the_team'
import About_us_ifcn_certified from './about_us_icfn_certified/about_us_ifcn_certified'
import About_us_carry_out from './about_us_carry_out/about_us_carry_out'
import About_us_what_do_we_check from './about_us_what_do_we_check/about_us_what_do_we_check'
import About_us_fact_check_category from './about_us_fact_check_category/about_us_fact_check_category'
import About_us_funding_section from './about_us_funding_section/about_us_funding_section'
import About_us_awards_recognition from './about_us_awards_recogonition/about_us_awards_recognition'
import About_us_pc_awards_couresel from './about_us_pc_awards_couresel/About_us_pc_awards_couresel'

function About_us() {
  return (
    <div style={{overflow:'hidden'}}>
    <About_us_header/>
    <About_us_our_mission/>
    <About_us_meet_the_team/>
    <About_us_ifcn_certified/>
    <About_us_carry_out/>
    <About_us_what_do_we_check/>
    <About_us_fact_check_category/>
    <About_us_funding_section/>
    <About_us_awards_recognition/>
    <About_us_pc_awards_couresel/>
    </div>
  )
}

export default About_us