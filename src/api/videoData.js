const url = "/video/video-holo.mp4";

const data = [
  {
    id: "m_0",
    text: "You have a physio appointment coming up in an hour, and the roads look fine...",
    timeCodeStart: 0,
    timeCodeEnd: 25,
    code: "0.0.1",
    responses: [
      {
        id: "m_0_0",
        text: "Yes",
        promptId: "m_1",
      },
      {
        id: "m_0_1",
        text: "No",
        promptId: "m_15",
      }
    ]
  },
  {
    id: "m_1",
    text: "So, we can try to get you some income support from the government...",
    timeCodeStart: 26,
    timeCodeEnd: 38,
    code: "0.0.2",
    responses: [
      {
        id: "m_1_0",
        text: "Yes",
        promptId: "m_2",
      },
      {
        id: "m_1_1",
        text: "No",
        promptId: "m_15",
      }
    ]
  },
  {
    id: "m_2",
    text: "Ok, I’ve taken care of that – I'll let you know when they’ve made a decision,...",
    timeCodeStart: 39,
    timeCodeEnd: 58,
    code: "0.0.3",
    responses: []
  },
  {
    id: "m_4",
    text: "Here are your top 5 options...",
    timeCodeStart: 58,
    timeCodeEnd: 68,
    code: "0.1",
    responses: [
      {
        id: "m_4_0",
        text: "Summer Job",
        promptId: "m_5",
      },
      {
        id: "m_4_1",
        text: "Summer Skills Boost",
        promptId: "m_8",
      },
      {
        id: "m_4_2",
        text: "Working Vacation",
        promptId: "m_11",
      },
      {
        id: "m_4_3",
        text: "Summer Off",
        promptId: "m_13",
      },
      {
        id: "m_4_4",
        text: "Talk about it later",
        promptId: "m_14",
      }
    ]
  },
  {
    id: "m_5",
    text: "I’ve picked out two jobs I think you’d like....",
    timeCodeStart: 76,
    timeCodeEnd: 94,
    code: "1.1",
    responses: [
      {
        id: "m_5_0",
        text: "Yes hear more",
        promptId: "TODO1_1",
      },
      {
        id: "m_5_1",
        text: "No don't hear more",
        promptId: "m_18",
      },
      {
        id: "m_4_2",
        text: "404",
        promptId: "m_17",
      },
    ]
  },
  {
    id: "m_6",
    text: "It’s for summer camp Burnsby, 24km from your house....",
    timeCodeStart: 95,
    timeCodeEnd: 116,
    code: "1.2",
    responses: [
      {
        id: "m_6_0",
        text: "Yes apply",
        promptId: "m_7",
      },
      {
        id: "m_6_1",
        text: "No don't apply",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_7",
    text: "Done. I shared your data with the camp.....",
    timeCodeStart: 118,
    timeCodeEnd: 132,
    code: "1.3",
    responses: [
      {
        id: "m_7_0",
        text: "Yes, look at other options",
        promptId: "m_4",
      },
      {
        id: "m_7_1",
        text: "No",
        promptId: "m_14",
      }
    ]
  },
  {
    id: "m_8",
    text: "Okay, here are some training programs I think you’d like.....",
    timeCodeStart: 133,
    timeCodeEnd: 158,
    code: "2.1",
    responses: [
      {
        id: "m_8_0",
        text: "Yes, hover technician",
        promptId: "m_9",
      },
      {
        id: "m_8_1",
        text: "Hovertaxi, Preschool",
        promptId: "m_17",
      }
    ]
  },
  {
    id: "m_9",
    text: "Hover Technician school starts the week after your job ends.....",
    timeCodeStart: 159,
    timeCodeEnd: 175,
    code: "2.2",
    responses: [
      {
        id: "m_9_0",
        text: "Yes, apply",
        promptId: "m_10",
      },
      {
        id: "m_8_1",
        text: "No, don't appy",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_10",
    text: "Ok, I’ve taken care of that – I'll let you know when they’ve made a decision...",
    timeCodeStart: 176,
    timeCodeEnd: 190,
    code: "2.3",
    responses: [
      {
        id: "m_10_0",
        text: "Yes, look at other options",
        promptId: "m_4",
      },
      {
        id: "m_10_1",
        text: "No, don't look at other options",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_11",
    text: "You can visit Japan or Australia on a working holiday visa...",
    timeCodeStart: 190,
    timeCodeEnd: 205,
    code: "3.1",
    responses: [
      {
        id: "m_11_0",
        text: "Yes, visit Japan or Australia",
        promptId: "m_12",
      },
      {
        id: "m_11_1",
        text: "No",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_12",
    text: "The working holiday visa will cost 250 credits...",
    timeCodeStart: 206,
    timeCodeEnd: 226,
    code: "3.2",
    responses: [
      {
        id: "m_12_0",
        text: "Yes, apply for these jobs",
        promptId: "m_10",
      },
      {
        id: "m_12_1",
        text: "No",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_13",
    text: "Great. You currently have 2000 credits in your bank account....",
    timeCodeStart: 245,
    timeCodeEnd: 270,
    code: "4.1",
    responses: [
      {
        id: "m_13_0",
        text: "Yes, I'm okay with this",
        promptId: "m_10",
      },
      {
        id: "m_13_1",
        text: "No, don't want to explore other options",
        promptId: "m_4",
      }
    ]
  },
  {
    id: "m_14",
    text: "All right Bob, is that all for now?",
    timeCodeStart: 274,
    timeCodeEnd: 280,
    code: "6.1",
    responses: [
      {
        id: "m_14_0",
        text: "Yes",
        promptId: "m_15",
      },
      {
        id: "m_14_1",
        text: "No",
        promptId: "m_18",
      }
    ]
  },
  {
    id: "m_15",
    text: "Sounds good. One last question...",
    timeCodeStart: 282,
    timeCodeEnd: 294,
    code: "6.2",
    responses: [
      {
        id: "m_14_0",
        text: "Yes or no",
        promptId: "m_16",
      }
    ]
  },
  {
    id: "m_16",
    text: "Got it. Anything else?",
    timeCodeStart: 294,
    timeCodeEnd: 305,
    code: "6.3",
    responses: [
      {
        id: "m_14_0",
        text: "Yes or no",
        promptId: "m_16",
      }
    ]
  },
  {
    id: "m_16",
    text: "Ok. You have 12 minutes left to get to physio on time. Have a good day, Bob.",
    timeCodeStart: 307,
    timeCodeEnd: 320,
    code: "6.4",
    responses: []
  },
  {
    id: "m_17",
    text: "I don’t have enough information on that, but once I do I’ll let you know...",
    timeCodeStart: 352,
    timeCodeEnd: 368,
    code: "404",
    responses: [
      {
        id: "m_17_0",
        text: "Yes look at options",
        promptId: "m_5",
      },
      {
        id: "m_17_1",
        text: "No",
        promptId: "m_14",
      },
    ]
  },
  {
    id: "m_18",
    text: "Ok, no problem. Would you like to look at some other options? ",
    timeCodeStart: 370,
    timeCodeEnd: 380,
    code: "505",
    responses: [
      {
        id: "m_17_0",
        text: "Yes look at options",
        promptId: "m_5",
      },
      {
        id: "m_17_1",
        text: "No",
        promptId: "m_14",
      },
    ]
  },
  {
    id: "m_stall",
    text: "Stall",
    code: "500",
    timeCodeStart: 321,
    timeCodeEnd: 350,
    responses: []
  }
]

export { data, url };
