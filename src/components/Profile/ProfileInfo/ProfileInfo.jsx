import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.img1} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"></img>
            </div>
            <div className={classes.ava}>
                <img className={classes.img2} src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753"></img>
                <div className={classes.description}>
                    <div>Iolanta</div>
                    <div>Date of Birth: 7 february</div>
                    <div>City: Minsk</div>
                    <div>Education: BSU'19</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;