const baseUrl = process.env.REACT_APP_API_URL;

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const saveScore = (score) => {
    axios({
        method: 'get',
        url: baseUrl + '/highscore',
        data: {
          user: 'Finn'
        },
        config
    })
    .then((response) => {
        console.log(response.data);
        /*if (data = score)   {
            axios({
                method: 'post',
                url: baseUrl + '/newScore',
                data: {
                  user: 'Finn',
                  score: 'Williams'
                },
                config
            })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        }*/
    }, (error) => {
        console.log(error);
    });
}

export default saveScore;