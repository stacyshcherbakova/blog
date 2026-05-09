export type PostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; code: string };

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: 'whats-been-going-on-april-2026',
    title: "What's been going on",
    date: '9 May 2026',
    summary: 'A reflection on April and the beginning of May, from relationships and rejection to entrepreneurship and starting small.',
    content: [
      { type: 'heading', text: 'Overview of my month' },
      { type: 'paragraph', text: 'April was an interesting month because it had very different energy from my Q1. However, that is okay. Sometimes you take two steps back and one step forward, but learn a thing or two.' },
      { type: 'heading', text: 'Human relationships' },
      { type: 'paragraph', text: 'This month I learned about the complexity of human relationships and the importance of prioritising yourself over others. Knowing your own worth and having self respect is not only important in professional relationships, but also in the ones outside of work. You literally cannot help someone who does not want your help, or keep someone in your life if they do not want to be there, and that is okay.' },
      { type: 'heading', text: 'Career and other' },
      { type: 'paragraph', text: 'On the career front, I had been waiting for my Encode fellowship decision and was slowly preparing for a potential interview, which I recently found out I was rejected from. I have also not heard back from my US visa application, which I applied for on March 2, and it has made me lose hope of getting the visa at all.' },
      { type: 'paragraph', text: 'On the bright side, I spent a lot more time in my circle of friends, taking it easy. I was asked to join Nucleate UK and also had an interview with Nucleate HQ, where I was given a role. I was able to apply for the AI for Health Imperial College London program and not go completely insane. I attended my first semi hackathon, which was not really a hackathon, but I pushed myself to go and participate.' },
      { type: 'paragraph', text: 'I have also started the Nucleate Catalyse program, which teaches you more about entrepreneurship and puts you in a group with people to go thoroughly through ideas for a particular startup, where everyone has different expertise.' },
      { type: 'paragraph', text: "It's not all that bad, and I am definitely getting better at not emotionally lingering on my past failures." },
      { type: 'heading', text: "What's coming" },
      { type: 'paragraph', text: 'May is already looking more promising. I joined a Nucleate event where I met some old friends, met people in real life instead of online, and also participated in a two day London Lab Live event where companies showed their solutions for lab automation, data collection, and entrepreneurship.' },
      { type: 'paragraph', text: 'I had the pleasure of meeting some people who are involved in the space industry and interested in microgravity medication. I had never really considered space due to my immigration status. However, I was completely amazed by the passion of these scientists, and it gives me hope that we are not that doomed.' },
      { type: 'paragraph', text: 'I was also able to meet my long term idol, Ross King, who gave a talk on AI for Science policy. I was able to speak to him, and it seems like he remembered who I was. I am meeting him to talk about AI for Science and hopefully find out what he is doing now. I also have other events coming up and hope for an update on my PhD application and US visa.' },
      { type: 'heading', text: 'Venture time?' },
      { type: 'paragraph', text: 'After going to the London Lab Live event, meeting my long time idol, and listening to a few entrepreneurship talks, in combination with being rejected from the Encode program, I realised that I want to start my own venture.' },
      { type: 'paragraph', text: 'Here is what made me understand why I can start now:' },
      { type: 'list', items: [
        'I should be able to develop my idea with little money',
        'Tap into the existing ecosystem because ecosystems are important, and so is being around like minded people',
        'Start small, not too ambitious, especially in big pharma'
      ] },
      { type: 'paragraph', text: 'Some other points that I think are valid, but maybe too early for my stage:' },
      { type: 'list', items: [
        'Incubators allow free facilities, but you really need to be associated with an institute for free access',
        'Learning how to operate outside of the incubator when there are not people to handle some things you took for granted',
        'Need to have a person with their neck on the line',
        'Need to make sure QA and regulation of your products are functional',
        'Get into an incubator lmao',
        'Business needs. If the problem has a small business market, it might not be worth it'
      ] },
      { type: 'paragraph', text: 'I realised that I do not have to have a company or a product right away. I can explore things in my own time using my laptop. If someone really wants to do something, they will find the time to do it. That applies to all aspects of life, career, health, and relationships.' },
      { type: 'paragraph', text: 'So what am I going to do? I am not sure yet. But we are starting small.' },
      { type: 'heading', text: 'Final thought' },
      { type: 'paragraph', text: 'I realised that when things start to go well, it is very important to appreciate them in the moment and then let go, because it is important not to set high expectations from just one tiny thing going right. I have been a victim of that, and I keep training myself to stay balanced rather than swinging between happy and existential. I hope to continue prioritising myself and highlighting more positive things that happen in my career, even if they are small.' },
      { type: 'paragraph', text: 'Big up May' },
    ],
  },
  {
    slug: 'intel-homebrew-on-apple-silicon',
    title: 'I was running Intel Homebrew on my Apple Silicon Mac for two years and had no idea',
    date: '28 April 2026',
    summary: 'A mildly horrifying tale of migrating to an M2 Mac, unknowingly keeping Intel Homebrew around, and only discovering it two years later.',
    content: [
      { type: 'paragraph', text: 'So in 2023 I upgraded from a 2018 MacBook Pro 15 inch to a MacBook Pro 13 inch with the M2 Pro chip. I had a backup of my old MacBook on an SSD and just transferred everything over. Simple.' },
      { type: 'paragraph', text: 'The thing is, I was a biomedical sciences student at the time. I had no idea there was even a meaningful difference between x86 64 and ARM. I just assumed a backup was a backup and got on with my life.' },
      { type: 'paragraph', text: 'Spoiler: that was not the right call.' },
      { type: 'heading', text: 'Two years later' },
      { type: 'paragraph', text: 'I installed OpenClaw and it flagged that my npm was Intel. That was the first time I even registered this could be a problem. I installed the Apple Silicon version of Homebrew, which lives at /opt/homebrew/, and OpenClaw started using that one and I kind of just forgot about it again.' },
      { type: 'paragraph', text: 'Then I tried to upgrade Neovim and Homebrew threw an error telling me it was Intel. So clearly not fully fixed.' },
      { type: 'heading', text: 'What was actually happening' },
      { type: 'paragraph', text: 'I dug into it with a friend and we figured out that two versions of Homebrew had been living on my machine the whole time. My terminal was running the ARM version, but tmux and some other packages were installed under the Intel Homebrew, and for some reason that was the one being invoked.' },
      { type: 'paragraph', text: 'We deleted the Intel version and went through Activity Monitor to make sure nothing was still running under Rosetta. Done.' },
      { type: 'heading', text: 'Worth checking if you migrated the same way' },
      { type: 'code', code: 'which brew\n# /opt/homebrew/bin/brew means Apple Silicon\n# /usr/local/bin/brew means you are on Intel Homebrew' },
      { type: 'paragraph', text: 'Everything worked fine for two years so I never questioned it. That is kind of the worst part honestly.' },
    ],
  },
  {
    slug: 'my-first-post',
    title: 'My first post',
    date: '2 April 2026',
    summary: 'A reflection on Q1 2026 — exhaustion, putting myself out there, and why I am finally glad to be in London.',
    content: [
      { type: 'heading', text: 'Why I started writing' },
      { type: 'paragraph', text: 'I have been meaning to start writing a blog for a while, maybe all the way back in 2022 when I first came across the blog of Samuel Rodriques and realised that his blog is in a way a time line of his ideas and their evolution. I realised that I should do something similar but never thought anyone would care. Recently I realised that I care and that I want to do it for myself to look back to.' },
      { type: 'paragraph', text: 'I have already progressed with tracking my life by writing into a diary daily. Not sure why I decided to do it at the age of 24, but at the beginning of this year there was a time where I really needed to get my thoughts out. This little experiment with a diary had been more or less successful so I decided to take it a step further.' },
      { type: 'heading', text: 'Q1 and the backstory' },
      { type: 'paragraph', text: "It's the ideal time to make some conclusions about Q1 and think about what I would want Q2 to bring on. But I think we should start with a bit of a backstory, since this is my first post." },
      { type: 'paragraph', text: "Since starting my job in October of 2024, I felt completely exhausted from 5 years at university, majorly sacrificing my social life for the sake of grades. That period of exhaustion and feeling of \"I have done nothing valuable to a society so far\" was with me for a year. Only earlier this year, after coming back from a family holiday, I had a sudden urge to try something new. I did not force myself, but I felt like it was about the right time for me to start something new. And it was actually related to something someone who used to be very close to me told me: you have low self esteem." },
      { type: 'heading', text: 'Putting myself out there' },
      { type: 'paragraph', text: "I do not think I do, or at least did not, but I decided that I want to change the way people perceive me and combat my severe IBS, which gets worse under stress. I decided that I am going to be more public by posting more on Instagram, have Twitter to post some of the stuff I like related to tech, be more explicit with my career history on LinkedIn, go to events more, and meet more people. That was the new \"something\" I started doing." },
      { type: 'paragraph', text: "But this experience has brought so much more into my life than just \"fixing\" my self esteem. I have started analysing how I behave in front of people I have not met before, learned how to initiate conversations with people I do not know at all, and learned how to move on after saying something awkward or embarrassing. This has made me realise that perhaps some of the things I say could be taken as unconfident." },
      { type: 'heading', text: 'Why London makes more sense now' },
      { type: 'paragraph', text: "But the best thing is the fact that I was able to come out of the student and research bubble I have found myself in for so long and be able to learn and see what other people are doing in VC, in tech, and in the entrepreneurial side of tech. It is such an invaluable experience to be at the intersection of all these areas and be able to go to events for free and learn from very senior leaders." },
      { type: 'paragraph', text: "I have constantly complained, mostly internally, that I dislike living in London because the city is big and I have no family and help here. This chain of experiences has made me realise why I am here and what I should get out of this location for the benefit of myself. Yes, I am still sad that I have no family here. But I know that everything I am doing now is also for the benefit of me, my family, and perhaps my future family." },
      { type: 'paragraph', text: "I have found people who are more like minded to me, people who are as ambitious and as interested in things that are mostly thought to be impossible, like AI scientists and lab automation. And I am happy because that already makes me feel less alone and more part of something bigger that is waiting for us in the future." },
      { type: 'heading', text: 'What I hope for next' },
      { type: 'paragraph', text: "So my little project of putting myself out there and building confidence turned into a character building story of Q1 2026, and I am grateful things turned out that way." },
      { type: 'paragraph', text: "I just hope I continue at the pace I am going through life right now. I hope for more meaningful interactions with people and meeting more like minded individuals. I hope that I can try doing more side projects with OpenClaw, about that in the next post, and actually speed up the building process, since I often find myself with a lot of ideas and little time or energy to execute." },
      { type: 'paragraph', text: "I am manifesting the best of luck for myself with the Encode and AI4Health applications, two big programs I would like to be involved in but that are extremely competitive. But then I can confidently say I did my best if I get rejected and we can just move on to our next goal." },
      { type: 'paragraph', text: "Yes, I would like to be able to move on from things quicker, and stop emotionally lingering on something I cannot change. This is also related to having high expectations for things and those expectations not meeting reality. Have low expectations. Hopefully I can change that this Q2." },
      { type: 'paragraph', text: "And finally, I want to start skateboarding again. I hope to sign up to a few lessons before I take it on by myself." },
      { type: 'paragraph', text: "This is my first non tech post, which is hopefully a nice introduction to my blog. Hopefully I can look back at it in years' time and say to myself: you made it Stacy." },
    ],
  },
];
