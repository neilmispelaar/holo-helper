const url = "/video/video.mp4";

const data = [
  {
    id: "m_0",
    text: "Hey Bob, want to give a Flux talk at ForwardJS?",
    timeCodeStart: 0,
    timeCodeEnd: 0,
    responses: [
      {
        id: "m_0_0",
        text: "No",
        promptId: "m_1",
      },
      {
        id: "m_0_1",
        text: "Yes",
        promptId: "m_2",
      }
    ]
  },
  {
    id: "m_1",
    text: "This is question 1",
    timeCodeStart: 20,
    timeCodeEnd: 30,
    responses: [
      {
        id: "m_1_0",
        text: "This answers question 1",
        promptId: "m_2",
      },
      {
        id: "m_1_0",
        text: "This also answers question 1",
        promptId: "m_0",
      }
    ]
  }
]

export { data, url };
