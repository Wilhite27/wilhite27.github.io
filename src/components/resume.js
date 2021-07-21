import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://lh3.googleusercontent.com/-DdQ-o4evZmU/XtWRf2tgfGI/AAAAAAAABPk/C_byct-kk_kZqoPXhAPc6A8EIVJTFsxrgCEwYBhgLKtMDABHVOhzrvj9Y1O3CbdwGCAakkRx7Lwun160zpSI9pEwqaudYmBuJGg0d2DtqF5Ellh0SmAJd_oxWE86v-7j9FEv59_L4GFf-4mmxflEDTIZAuOH52GaSTtQkUuUPW-y0Qh5T5z0WIlh7h9AfhSLwH6L5CvOdvyBIV0447E88-TGxOB8cbhu3_P-PgC36Uxy2HR2tHOmL2r97ny-N1Q1ziroNh4HZIl3G3PBRHFaA60N4QXCBpRp84-zjRnK_3kAJTy5Y0_XOUziGvI5cn6SRKkFRqE2QQueiidNVh5S23stbTiiABN_2dShtvGxiuW-cdpB-kNKEkt583EFFJ9YdM12o5rj2TtTb4vo2n9hsHhtr6p95BvNHhWobv1Cm6wTG-5kop6nZZGib3fSM-11cGeGZx5KSCmNgnqe9Op2Lc_KVyAnHciHQS5QgujNnhfYRR8ftAuOn8I9mTq9LQ15yhFCH0HpENhUmjJW08ACLDQZiFmhOuhRz73CiJk5WtsWMuNuzhgGSbsOGuK0syB0x28iKpEwYuZunQ46y-14_dRfA2UM3FtM9Lc9SCJ9u4U2RO7NX_XMamAMk4jTnvbyeNFDdlbQvUvXnX4fQyaKCHucyCt0w_5TdhwY/w140-h140-p/2020-06-01.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Durrelle Wilhite</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={45}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
