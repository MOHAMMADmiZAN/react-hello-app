import React, {Component} from 'react';
import './profile.style.css';
import Name from "./name";
import Details from "./details";
import Skill from "./skill";
import Social from "./social";

class Profile extends Component {
    mizan = {
        name: 'Mohammad Mizan',
        skillA: 'Javascript',
        skillB: 'Python',
        skillC: 'React',
        skillD: 'laravel',
        skillE: 'mysql',
        skillF: 'php',
        link: {
            fbLink: 'https://www.facebook.com/error360fru',
            liLink: 'https://www.linkedin.com/in/mohammad-mizanur-rahman-08360b19b',
            gitLink: 'https://github.com/MOHAMMADmiZAN',
            devLink: 'https://dev.to/mohammadmizan'


        },
        linkText: {
            fb: 'facebook',
            li: 'linkedin',
            gitl: 'github',
            dev: 'Dev'
        }


    }

    render() {
        return (
            <div className='container'>
                {/*<Name name='mohammad mizan'/>*/}
                {/*<Details/>*/}
                {/*<Skill skillA='Javascript' skillB='React' skillC='Php' skillD='Laravel' skillE='Mysql' skillF='Python'/>*/}
                {/*<Social fb='facebook' fbLink="https://www.facebook.com/error360fru" li='linkedin'*/}
                {/*        liLink='https://www.linkedin.com/in/mohammad-mizanur-rahman-08360b19b' gitl='Github'*/}
                {/*        gitLink='https://github.com/MOHAMMADmiZAN' dev='Dev' devLink='https://dev.to/mohammadmizan'/>*/}
                <Name name={this.mizan.name}/>
                <Details/>
                <Skill skillA={this.mizan.skillA} skillB={this.mizan.skillB} skillC={this.mizan.skillC}
                       skillD={this.mizan.skillD} skillE={this.mizan.skillE} skillF={this.mizan.skillF}/>
                <Social fb={this.mizan.linkText.fb} fbLink={this.mizan.link.fbLink} li={this.mizan.linkText.li}
                        liLink={this.mizan.link.liLink} gitl={this.mizan.linkText.gitl}
                        gitLink={this.mizan.link.gitLink} dev={this.mizan.linkText.dev} devLink={this.mizan.link.devLink}/>
            </div>
        )
    }
}

export default Profile