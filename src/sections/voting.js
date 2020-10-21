import React, { useState } from 'react';
import { mutate, trigger } from 'swr';

import { format } from '../utils';
import CONSTANTS from '../constants';

const limit = 3;

export default function Voting({snacks = []}) {
    const [votedSnacks, setVoteSnacks] = useState([]);
    const [errorVote, setErrorVote] = useState(false);
    const [remainingVotes, setRemainingVotes] = useState(limit-votedSnacks.length);

    const sortedSnacks = [].concat(snacks).sort((a, b) => b.votes - a.votes);

    const voteCurrentSnack = async (item) => {
        if (remainingVotes > 0) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': CONSTANTS.TOKEN,
                    'Content-Type': 'application/json'
                }
            }
            await fetch(format(CONSTANTS.VOTE_SNACKS_API, {snackId: item.id}), requestOptions)
                .then(response => response.json())
                .then(data => {
                    setRemainingVotes(remainingVotes-1);
                    setVoteSnacks([...votedSnacks, data])
                });
            trigger(CONSTANTS.GET_SNACKS_API);
        } else {
            setErrorVote(true);
        }
    }

    return (
        <div className="site-bd-section" id="voting">
            <div className="u-constrainer">
                <div className="layoutPanel">
                    <div className="layoutPanel-hd">
                        <div className="layoutPanel-hd-title">
                            <h2 className="hdg hdg_2 mix-hdg_dark">Snack Voting</h2>
                        </div>
                        <div className="heroBanner-content-bd">
                            <p className="hdg_4">
                                Vote on the snacks you want to see in this month's rotation
                            </p>
                        </div>
                        <div className="borderTop-black center-container remainingVotes-container">
                            <p className="hdg_4">{remainingVotes} Votes Remaining</p>
                        </div>
                        {
                            errorVote && (
                                <div className="error">
                                    You don't have any remaining votes for this month!
                                </div>
                            )
                        }
                    </div>
                    <div className="layoutPanel-bd">
                        <div className="grid">
                            <div className="grid-col grid-col_3of5 u-vr_x4">
                                <div className="teal-bg spaceEvenly-container">
                                    <h3 className="hdg hdg_3">
                                        Available Items
                                    </h3>
                                    <div className="round white-bg number">
                                        <span>{snacks.length}</span>
                                    </div>
                                </div>
                                <div className="voteContent">
                                    {
                                        sortedSnacks.map((snack, i) =>
                                            <div className="row" key={snack.id}>
                                                <button
                                                    disabled={votedSnacks.some((e) => e.id === snack.id)}
                                                    className={`btn vote-btn ${i % 2 === 0 ? 'darkgrey-bg' : 'grey-bg'}`}
                                                    onClick={() => { voteCurrentSnack(snack)}}
                                                >
                                                    +
                                                </button>
                                                <div className={`spaceEvenly-container vote-item ${i % 2 === 0 ? 'grey-bg' : 'lightgrey-bg'}`}>
                                                    <span>
                                                        {snack.product}
                                                    </span>
                                                    <span className="number">
                                                        {snack.votes}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="grid-col grid-col_2of5 u-vr_x4">
                                <div className="spaceEvenly-container borderBottom-black">
                                    <h3 className="hdg hdg_3 mix-hdg_dark">
                                        Selection
                                    </h3>
                                    <div className="round teal-bg number">
                                        <span>{votedSnacks.length}</span>
                                    </div>
                                </div>
                                <div className="selectedSnacks-content">
                                    {
                                        votedSnacks.map((snack) =>
                                            <div className="spaceEvenly-container" key={`${snack.id}-selected`}>
                                                <span>{snack.product}</span>
                                                <span className="number">{snack.votes}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}