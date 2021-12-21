export default function projects(req, res) {
  res.status(200).json([
    {
      name: "Coin status",
      stack: "React, Chakra UI",
      description:
        "A web app that shows the current status of the crypto currencies from CoinGecko API.",
      github_url: "https://github.com/Borisigle/CryptoStatus",
      site_url: "https://coinsstatus.netlify.app/",
      image: "",
    },
    {
      name: "Task It",
      stack: "React, Chakra UI",
      description:
        "A web app that allows you to create tasks and manage them from a list, additonally tasks are saved in local storage.",
      github_url: "https://github.com/Borisigle/TaskManager",
      site_url: "https://taskit.netlify.app/",
      image: "",
    },
    {
      name: "Interval timer",
      stack: "React, Chakra UI",
      description:
        "A web app that allows you to create a timer with intervals. Those are shown like 'Work' and 'Rest' sets. Its meant to be a Workout App",
      github_url: "https://github.com/Borisigle/Interval-Timer",
      site_url: "https://intervaltimerapp.netlify.app/",
      image: "",
    },
    {
      name: "Tic tac toe",
      stack: "React, Chakra UI",
      description: "A simple tic tac toe game, have fun!.",
      github_url: "https://github.com/Borisigle/tictactoe",
      site_url: "https://tictactoe-ivory.vercel.app/",
      image: "",
    },
  ]);
}
