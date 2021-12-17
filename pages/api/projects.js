export default function projects(req, res) {
  res.status(200).json([
    {
      name: "Coin status",
      stack: "React, Chakra UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et orci tristique, porta neque et, ultricies leo. Vivamus non maximus magna, fringilla commodo enim. ",
      github_url: "https://github.com/Borisigle/CryptoStatus",
      site_url: "https://coinsstatus.netlify.app/",
      image: "",
    },
    {
      name: "Task It",
      stack: "React, Chakra UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et orci tristique, porta neque et, ultricies leo. Vivamus non maximus magna, fringilla commodo enim. ",
      github_url: "https://github.com/Borisigle/TaskManager",
      site_url: "https://taskit.netlify.app/",
      image: "",
    },
    {
      name: "Interval timer",
      stack: "React, Chakra UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et orci tristique, porta neque et, ultricies leo. Vivamus non maximus magna, fringilla commodo enim. ",
      github_url: "https://github.com/Borisigle/Interval-Timer",
      site_url: "https://intervaltimerapp.netlify.app/",
      image: "",
    },
    {
      name: "Tic tac toe",
      stack: "React, Chakra UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et orci tristique, porta neque et, ultricies leo. Vivamus non maximus magna, fringilla commodo enim. ",
      github_url: "https://github.com/Borisigle/tictactoe",
      site_url: "https://tictactoe-ivory.vercel.app/",
      image: "",
    },
  ]);
}
