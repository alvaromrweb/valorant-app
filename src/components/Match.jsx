import PlayerPosition from "./PlayerPosition"
import RankProgressBar from "./RankProgressBar"
import RankImage from "./RankImage"

export default function Match({match, isWizen}) {
    return  (
        <article 
                className={`w-full border-l-8 rounded py-4 px-5 flex flex-wrap justify-between items-center gap-3 md:gap-5 relative
                ${match.playerWon ? 'bg-[#64C2A7]/25 border-green-400' : 'bg-[#ff4357]/25 border-red-400'} 
                    ${isWizen && (match.playerWon ? "before:bg-[url('/wizencara.jpg')]" : "before:bg-[url('/wizencaragrito.jpg')]")} before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-30 before:bg-no-repeat before:bg-contain md:before-bg-auto
                `} 
            >
                <div className="z-10 basis-full md:basis-auto flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start justify-between md:justify-normal">
                    <p className={`font-bold md:text-xl ${match.playerWon ? 'text-green-400' : 'text-red-400'}`}>
                        {match.playerWon ? 'Victory' : 'Defeat'}
                    </p>
                    <p className="text-gray-300 text-xs md:text-base">{match.metadata.mode}</p>
                    <p className="text-gray-300 text-xs md:text-base">{match.matchHour} - {match.matchDate}</p>
                </div>
                
                <div className="z-10 basis-1/4 md:basis-auto">
                    <img className="w-12 md:w-[4.5rem] max-w-fit" src={match.playerSelected.assets.agent.small} alt={`Image of agent ${match.playerSelected.character}`} />
                </div>
                <div className="flex flex-col basis-1/4 md:basis-auto text-center z-10">
                    <div className="text-gray-500 text-xl whitespace-nowrap">
                        <span className="text-white font-bold">{match.playerSelected.stats.kills}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.deaths}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.assists}</span> 
                    </div>
                </div>
                <div className="text-center z-10 basis-1/4 md:basis-auto">
                    <PlayerPosition playerPosition={match.playerPosition} />
                </div>
                <div className="flex flex-col 2xl:px-5 text-center z-10 basis-1/4 md:basis-auto">
                    <p className="text-gray-400">{match.metadata.map}</p>
                    <p className="md:text-2xl font-bold">{match.teams.red.rounds_won} : {match.teams.blue.rounds_won}</p>
                </div>
                <div className="w-32 hidden md:flex flex-col gap-2 z-10">
                    {match.mmr ? (
                        <>
                            <div className="flex justify-center">
                                <RankImage mmr={match.mmr} size={'small'} />
                            </div>
                            <RankProgressBar mmr={match.mmr}>
                                {match.mmr.ranking_in_tier} pts
                            </RankProgressBar>
                        </>
                    ) : (
                        <div className=""></div>
                    )}
                </div>
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Score</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.stats.score}</span>
                </div>
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Damage</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.damage_made.toLocaleString()}</span>
                </div>
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Economy</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.damagePerCredits > 0 ? match.playerSelected.damagePerCredits : '0'} </span>
                </div>
            </article>
    )
}