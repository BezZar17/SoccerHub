import { useState, useEffect } from 'react'
import { useLazyGetScoresQuery } from '../services/league'


const Demo = () => {
  const [leagues, setLeagues] = useState({
    url: '',
    scores: '',
  });
  const [allLeagues, setAllLeagues] = useState([])


  // RTK lazy query
  const [getScores] = useLazyGetScoresQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("leagues")
    );

    if (articlesFromLocalStorage) {
      setAllLeagues(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingLeagues = allLeagues.find(
      (item) => item.url === leagues.url
    );

    if (existingLeagues) return setLeagues(existingLeagues);
    const { data } = await getScores({ leaguesUrl: leagues.url });
    if (data?.scores) {
      const newLeagues = { ...leagues, scores: data.scores };
      const updatedAllLeagues = [newLeagues, ...allLeagues];

      setLeagues(newLeagues);
      setAllLeagues(updatedAllLeagues);
      localStorage.setItem("leagues", JSON.stringify(updatedAllLeagues));
    }
    };
  
  return (
    <container>
      <div>
        <form onSubmit={handleSubmit}>
         
          <input
            type='text'
            placeholder='Type a league'
            value={leagues.url}
            onChange={(e) => setLeagues({...leagues, url: e.target.value })}
            required
           />
        <input type="submit" value="go" id="submit" />
        </form>
      </div>
    </container>
  );
      }
  
export default Demo