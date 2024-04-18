async function sendScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    let main = document.querySelector("#root");
    let textarea = main.querySelector(`div[contenteditable="true"]`);
    if(!textarea) throw new Error("No tienes una conversación abierta.")

    for(const line of lines){
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`button[title="Send Message"]`) || main.querySelector(`"icon icon-send"`)).click();
        }, 100);

        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

const content = `ACE VENTURA
PET DETECTIVE

Written by
Jack Bernstein
Tom Shadyac
Jim Carrey

EXT. STREET - DAY

A UPS Man with a big pot belly is walking down the street, whistling and carelessly tossing a package in the air. We hear the sound of broken glass in the box. He passes a professional woman.

    UPS MAN

Good morning, UPS!

    He tosses the box behind his back like a basketball, then acknowledges another passerby.

    UPS MAN

UPS, good to see you!

    He takes a couple of steps, then flings the package incredibly high into the air, spins completely around and expertly drops to one knee and catches the box. A Hispanic man passes.

    UPS MAN

Buenos dias. Uo Pay eSsay.

    EXT. APARTMENT BUILDING - DAY

The UPS Man dodges a couple of black kids as though playing basketball. He runs up the front steps of the building. He reaches out to open the front door and inadvertently flings the package behind him and back down the steps.

    He goes back, retrieves the package, then enters the building.

    INT. LOBBY - DAY

Several people stand in the elevator. The UPS Man just makes it, but the door closes on the package... REPEATEDLY. He feigns embarrassment.

    INT. 3RD FLOOR - DAY

ELEVATOR DOORS OPEN. The UPS Man throws the package out onto the floor and starts kicking it down the hall like a soccer player. With one last big kick the parcel lands in front of APARTMENT 3B. He picks it up and knocks on the door.

    We hear a small dog barking.

    GRUFF MAN (O.S.)

Shut the hell up, you stupid mutt!

    An angry, burly man pokes his nose hairs out the chained door.

    GRUFF MAN

What do you want?

    UPS MAN

UPS, sir. And how are you this afternoon? Alrighty then!

    The man grumpily unchains the door. He's a big guy - 6'5", 250, and 50 of that is chest hair. A small Shiatsu stands beside him.

UPS MAN

I have a package for you.

                         The UPS guy thrusts the package toward the man. We can clearly hear broken glass inside. The man takes the package.

    GRUFF MAN

It sounds broken.

    UPS MAN

Most likely sir! I bet it was something nice though! Now... I haver an insurance form. If you'll just sign here, here, and here, and initial here, and print your name here, we'll get the rest of the forms out to you as soon as we can.

    The man begrudgingly begins to fill out the form. The dog wags his tail and whines. We can see that he likes the UPS guy.

    UPS MAN

That's a lovely dog you have. Do you mind if I pet him, sir?

GRUFF MAN

(mumbles)

I don't give a rat's ass.

    The UPS Man bends down and talks to the dog in a really sucky pet talk.

    UPS MAN

Oo ja boo ba da boo boo do booo!

    GRUFF MAN

(under breath)

Brother.

    Before the Gruff Man can finish, the UPS Man stands back up and takes the form again.

    UPS MAN

That's fine sir. I can fill out the rest. You just have yourself a good day. Take care, now! 'Bye 'bye, then!

THRASH MUSIC STARTS

INT. HALLWAY -- CONT'D

The UPS Man moves swiftly down the hall and into the stair well.

    INT. APARTMENT 3B - CONT'D

The Gruff Man shakes the box, tosses it down and sits in front of the TV.

    EXT. APARTMENT BUILDING - CONT'D

The UPS Man bursts from the front door and hustles down the street very quickly. He passes several people.

    UPS MAN

(quickly)

UPS, S'cuse me. UPS, comin' through.

    INT. APARTMENT 3B - CONT'D

We see the back of the Shiatsu staring at the crack in the front door. He has not moved an inch. The Gruff Man looks over.

    GRUFF MAN

Hey, stupid! Get away from the door!

    The dog doesn't budge and this really pisses him off. He gets up and heads for the dog.

GRUFF MAN

What's the matter with you, I said GIT!!!

He roughly picks the dog up by the scruff of the neck, but as he turns it around we see that it is a stuffed dog. Around it's neck is a business card that reads, "You have been had by Ace Ventura - Pet Detective." He breathes fire.

GRUFF MAN

Son of a bitch!

    He smashes the dog to the ground.

    EXT. ALLEY - CONT'D

As the UPS Man/Ace rounds the corner, his shirt opens up at his pot belly and the Shiatsu's head sticks out. Ace is gloating.

ACE

(announcer's voice)

That was a close one, ladies and gentlemen. Unfortunately, in every contest, there must be... A LOOSER!

    He jumps into an old beat-up Chevy Bel Air, and lets the dog out onto the passenger seat.

ACE (CONT'D)

LOOOHOOOSERRRHERRR!

    He then pulls open the car's ashtray, and to the dog's delight, it's filled with puppy chow.

He tries to start the engine but it won't turn over. The dog shoots him a look.

ACE

(to dog)

No problem, it gets flooded. We'll just wait a few seconds.

Ace sits back. SMASH!!!

    From Ace's POV we see a Baseball bat shatter the front windshield.

ACE

Or, we could try it now.

    Ace frantically tries to start the car. His new friend continues around the car beating the living shit out of it.

    ACE

Oooh, boy.

    ACE'S POV

We see the creep wailing on the car in Ace's side view mirror.

ACE

Warning! Assholes are closer than they appear!

    The dog is barking insanely.

ACE

(to dog)

You think you can do better?!

    The baseball bat is now pummeling the trunk.

    ACE

Wanna give me a push while you're back there?

BOOM! The back window shatters. Then the car's engine roars to life. Ace rejoices.

ACE

FARFEGNUGENNNNN!!!

    Ace leaves the bad guy in a cloud of dust and gravel, screaming bloody murder.

    EXT. MIAMI CITY STREETS - DAY

Ace and his new pal speed away freely.

    Close on the happy dog, hanging his head out the car window. PAN across the broken windshield to Ace, also hanging his head out the window to see where he's going.

The car drives by a sign on a telephone pole: "Reward" -- with a picture of the Shiatsu in Ace's seat.

THRASH MUSIC ENDS

INT. HOUSE - DAY

A very sexy woman is hugging and kissing the Shiatsu.

    WOMAN

My little baby. You missed mommy didn't you? Did daddy hurt you? I won't let him, no I won't. He may have kept the big screen TV, but he's not gonna keep my baby. No he isn't.

(very sexy to Ace)

Thank you, Mr. Ventura. How can I ever repay you?

    She slinks over to Ace and puts her arms around his neck.

    ACE

Well, the reward would be good, and there was some damage to my –

She cuts Ace off with a devastating kiss.

    WOMAN

Would you like me to take you pants off instead?

    ACE

    Ummmm… Sure.

    She pulls him toward the bedroom.

    WOMAN

It takes a big man to stand up to my husband. He's already put two of my lovers in the hospital.

ACE

How did he find out? Does he have you followed.

    WOMAN

No… I tell him

She plants a kiss on Ace's neck and pulls him down out of frame onto the bed.

EXT. DOLPHIN STADIUM PLAYING FIELD - DAY

The stands are empty, but there's plenty happening on the field. The Miami Dolphins are practicing. Dan Marino is in top form, hitting pass after pass.

Behind one of the goal posts, the team's mascot, a rare dolphin (SNOWFLAKE), wearing #4, is practicing his routine. The Trainer is dressed like a quarterback.

TRAINER Blue! 42! Blue! 42! Hut! Hut!

    Snowflake swims over, snatches a small football out of the Trainer's hand, and does an end zone dance on his tail. He then returns the ball to the trainer.

The Trainer now sets the ball on the dolphin's tail and snowflake "kicks" a perfect field goal. The Trainer blows a whistle and raises both arms.

DISSOLVE TO:

    EXT. DOLPHIN STADIUM PLAYING FIELD - NIGHT

The stadium is now completely empty. Snowflake peacefully swims around his tank.

    Suddenly, the water is illuminated by the headlights of an n.d. panel truck.

    The rear door slides open. Two men jump out in wet suits.

    They slip into the water while a third waits outside the tank.

    Snowflake surfaces to check out the action. One of the men holds out a fish. Snowflake eagerly takes it, then shudders as a large syringe is stuck into his back. Snowflake thrashes around.

    Quick cut of a hand with the blur of a ring slamming against the tank. But the needle has done its job. Snowflake quickly goes limp.

    Snowflake is loaded into the back of the truck. Move in on Snowflake's face. His excited cackle has turned into a painful whimper.

The truck skids away passing the guard gate. The guard is hog tied and gagged, struggling to free himself.

    INT. ADELLE'S FRIENDLY PET SHOP - NEXT DAY

Close up on a dead goldfish laying on a newspaper. We pull back to reveal ADELLE ROSENBERG, the seventy year old owner of a cluttered pet shop. She's handing a live goldfish in a bag to JENNIFER, a very sweet nine year old.

ADELLE

Here you go, honey. Now remember… this kind of fish doesn't like it in the freezer.

JENNY

But what's gonna happen to Dolly?

ADELLE

Don't worry, I'll make sure she gets a proper burial.

    Jennifer exits. Adelle calls to her cat, and tosses it the goldfish. The cat catches it in mid-air.

    ADELLE

Rest in peace.

    Ace enters the pet shop. It looks like he slept in his clothes.

    ADELLE

Well… here comes another dead fish.

    ACE

Hi, beautiful. What time do you get off?

    ADELLE

    Uh oh.

ACE

(suggestively)

I've heard some pretty great things about your kibble.

ADELLE

Well, I hope I'm not getting a reputation.

ACE

(switching to mock anger)

Just get me the food!

    She chuckles at Ace as she loads a couple of bags with different kinds of pet food.

    ADELLE

So… ahh, when can I expect you to pay your tab?

    ACE

    I'm a little bit Sli Pickins, right now, I'm a little Tight Squeeze Louise, a little Welfare Wolly, Potless Pissing Pete, I'm ah –

ADELLE

If you were a horse I'd shoot ya'. Just take it.

    ACE

Gravy! I'm good for it, Adelle. I'm on a very big case right now.

    Ace reaches into his coat pocket and pulls out a flyer with a picture of a white pigeon.

    ACE

See this pigeon? It's a true albino. Some rich guy lost it. He's offering a ten thousand dollar reward.

    ADELLE

Wow, albino pigeons are very rare. How are you going to find him?

    ACE

    Just keep my eyes open, and hope to god it doesn't snow.

Ace grabs his bags and heads for the door.

    ADELLE

You're a good boy, Ace. A good boy.

He holds the door open for an elderly gentleman who is entering at the same time. The gentleman is walking a toy poodle on a leash. The poodle is dragging its butt along the entire length of the floor. Ace and Adelle just stare.

    ELDERLY MAN

(in a loud voice)

Do you have anything for ringworm?

                             EXT. SURFSIDE APARTMENT COMPLEX - DAY

Ace enters the courtyard of a two story U-shaped apartment complex carrying his groceries. It's a crappy joint but he calls it home. Inside an open apartment on the ground floor, the landlord, MR. SHICKADANCE, sits watching TV, stuffing his face with cheese doodles. Ace sneaks past the door and up the stairs.

EXT. SECOND FLOOR - DAY

Ace is just putting the key in the door when the landlord steps up behind him. Ace is startled by the dreaded 'Shickadance Rasp' (not unlike Linda Blair in THE EXORCIST).

LANDLORD

Venturaaaaa?

    Ace straightens up, but doesn't turn around.

ACE

Yes, Satan?

    Now Ace turns around in mock surprise.

    ACE

Oh, I'm sorry, sir. You sounded like someone else.

LANDLORD

Never mind the wise cracks Venturaaa. You owe me rent!

    ACE

Mr. Shickadance… I told you, you're my first priority! As soon as I find the white pigeon, you're paid!!

    LANDLORD

I heard animals in there Ventura! I heard 'em again this morning, scratchin' around.

    ACE

I never bring my work home with me, sir.

    The landlord notices the bags of kibble.

    LANDLORD

Oh, yeah? What's all this pet food for?

ACE

(beat)

Fiber.

    The landlord isn't buying it.

ACE

You wanna take a look for yourself? Go head.

    Ace rattles his keys in the door. Then he swings it open and turns on the light. The house is clear. Ace walks in as the landlord stands there snooping and sniffing the air.

    ACE

Well… are you satisfied?

    LANDLORD

    (still suspicious)

Yeah, but don't ever let me catch you with an animal in there, that's all!

    ACE

Okay then. Take care now. 'Bye 'bye.

    The landlord walks away as Ace closes the door.

ACE

(quietly to himself)

LLOOSER.

    He then turns to the room and gives a distinct whistle.

    CHAOS ENSUES! Animals jump out from every direction. Lizards crawl out of drawers, birds fly through the air, all of them gravitating to Ace.

ACE

(to his flock)

Ooshhooboobooboodoodoo!

    INT. MIAMI DOLPHIN HEADQUARTERS - LATER THAT DAY

The very imposing office of BOBBY RIDDLE, owner of the Miami Dolphins. Riddle, 70, is a take charge, doesn't take crap from anyone type of guy. He is yelling at ROGER PODACTER, an ex-linebacker in his early sixties, and MELISSA ROBINSON, Podacter's attractive assistant.

    RIDDLE

I just want to know one thing; How the hell do you lose a 500 pound fish?!

    Melissa's about to speak but hesitates.

RIDDLE (CONT.)

What?

    MELISSA

    It's not a fish, sir. It's a mammal.

    An angry Riddle stands up.

    RIDDLE

Oh, thank you very much, Mrs. Jacque Cousteau!

    PODACTER

Bob, she didn't mean anything by it.

RIDDLE calms down a little, and sits.

RIDDLE

(calmer)

Listen, personally, I don't give a good god damn about a fish.

He looks at Melissa. She doesn't dare say anything.

RIDDLE (CONT.)

All I care about is winning this Super Bowl! I want the players' head in the right place. Shit, Roger, you've been in this game long enough, you know how superstitious players are. Our quarterback's been putting his socks on backwards since high school. And I got a lineman who hasn't washed his jock in two years because he thinks flies are lucky! I want that god damn fish on the field Super Bowl Sunday! FIND THE FISH, OR FIND NEW JOBS!

    INT. HALLWAY - CONTINUOUS ACTION

An upset Podacter and Melissa walk through the hallway.

    PODACTER

Why did it have to happen now? I got three stinking years left till retirement.

    MELISSA

I've got forty.

PODACTER

I'll tell you who did it. It was those goddamn animal rights nuts! Always out there with their goddamn signs, ANIMALS WERE BORN FREE, STOP TORTURING SNOWFLAKE! That goddamn fish lives better than they do!

They stop outside Melissa's office by her secretary's desk.

    MELISSA

The police are checking into the animal rights people.

(to secretary)

Martha, have the police called back about the dolphin yet?

    MARTHA

    No, but I wanted to tell you, when I lost my Cuddles, I hired a pet detective.

    PODACTER

A what?

    MARTHA

    A pet detective.

    MELISSA

Thanks Martha, but we'd better leave this to professionals.

MARTHA

Well actually, he was quite good. Pet detection is a very involved, highly scientific process.

    CUT TO:

    EXT. ROOF OF HOUSE - SAME TIME

CLOSE ON ACE - COOING like a pigeon. Widen to reveal, Ace precariously perched on the roof of a two story building. He is four feet away from "The" pigeon. Ater a beat, he makes a mad, spastic, yet scientific, lunge for the bird.

    ACE

AAAAAAAAAAAAAAAAAHHHHHHHH!!!!!!!

    The bird makes a clean getaway. Unable to stop his momentum, Ace flies past the edge of the building and slides down the side of the roof.

    EXT. GROUND - CONTINUOUS ACTION

BAM!!! Ace crashes to the ground. As he lies face down, in a heap of trash, his beeper goes off.

    EXT. DOLPHIN HEADQUARTERS/BOBBY RIDDLE STADIUM - DAY

Parking lot. Ace's clunker drives by some real nice cars. Employees stare at him.

INT. SECURITY CHECK POINT - DAY

A stern guard is admitting people into the stadium. He scans each one with a security detection wand.

    MAN #1

Art Wheeler. Sporting supplies.

    The guard scans him. He goes.

    MAN #2

Tom Anderson. Concessions.

    The guard scans him. He goes.

    ACE

Ace Ventura. Pet detective.

    The guard stares at Ace, accusingly.

    INT. MELISSA'S OFFICE - DAY

Martha enters.

    MARTHA

Ah… Mr. Ventura to see you.

    MELISSA

Okay, send him in.

Martha exits, Ace enters.

MELISSA (CONT'D)

Hi, I'm Melissa Robinson. Did you have any trouble getting in?

ACE

No, the guy with the rubber glove was surprisingly gentle.

MELISSA

(apologetically)

Super Bowl week. Security's tight. Mr. Ventura, I'll get right to the point…

She slips a tape in the VCR and gestures for Ace to sit.

    MELISSA

Our mascot was stolen from his tank last night. Are you familiar with Snowflake?

    The tape shows Snowflake doing a trick. The trainer, dressed like a quarterback, shouts out signals.

TRAINER (ON TAPE) Blue! 42! Blue! 42! Hut! Hut!

    Snowflake swims over, snatches the small football out of the trainer's hand, swims the length of the pool, does an end zone dance on his tail, then returns the ball to the trainer.

MELISSA (O.S.)

We got Snowflake from the Miami Seaquarium. He's a rare Bottle Nose Dolphin. That's the new trick he was going to do during the half-time show.

    While Ace studies the tape, he chews sunflower seeds in a bird-like fashion, placing the shells in a neat little pile on her desk.

    MELISSA

Would you like an ashtray?

    ACE

    No, I don't smoke.

He adds more shells to the pile.

    Melissa is already wondering if she has made a mistake.

    MELISSA

To be honest, Mr. Ventura. I'm pretty skeptical. Before today, I didn't even know there was such a thing as a pet detective.

    ACE

Well, now that you do, you'll know who to call if your Schnauser ever runs away.

MELISSA

How did you know I have a Schnauser?

    Ace pulls a, invisible-to-the-naked-eye dog hair off here blouse and presents it to her.

    ACE

He's young, about five pounds, black coat, white speckles…

(sniffs the hair)

…likes to chase cars.

    MELISSA

Very impressive.

    ACE

You should see what I can do with a good stool sample.

    MELISSA

I can hardly wait. Look, we've got a problem. Can you help me or not?

ACE

(coy)

Well, sea faring creatures aren't really my expertise…

MELISSA

We'll give you three thousand dollars on delivery.

Ace immediately becomes the narrator of a nature show.

    ACE

The dolphin is a social creature. Capable of complex communication. Traveling in large groups or schools…

EXT. PLAYING FIELD - A SHORT TIME LATER

The Dolphin players practice. A crowd of reporters interview Marino.

    MARINO

We just choked in 82. We had a chance to win it and we didn't. Nobody's gonna choke this time, and if they do, I'll kill 'em.

    Ace and Melissa head for Snowflake's tank.

MELISSA

The police were here this morning. Apparently, the kidnappers used the back gate.

    Ace bends down to look at some tire tracks on the field.

MELISSA (CONT'D)

They said some kind of a –

ACE

Four wheel drive van… loaded from the rear.

    Ace sniffs the turf. Podacter enters nervously.

    MELISSA

Oh, hi, Roger. How are you holding up?

    PODACTER

    Well if it looks like I'm walking funny it's because I have a bunch on reporters up my ass. They've been asking me about Snowflake all day. Who's this?

    MELISSA

    Roger Podacter, meet Ace Ventura. Ace is our pet detective.

    Podacter shakes his hand.

    PODACTER

Nice to meet you. Martha Metz recommended you very highly.

    ACE

Martha Metz? Martha Metz. Oh yeah, the bitch.

    PODACTER

What?

    ACE

    Pekinese. Hyperactive. Lost in Highland Park area. She was half dead when I found her. Is that the tank?

    They both follow Ace as he makes a B-line.

    EXT. SNOWFLAKE'S TANK - MOMENTS LATER

The tank is empty.

    ACE

Cops drain it?

    MELISSA

    Yes. This morning.

    Ace hops on the ladder.

    ACE

If I'm not back in five minutes… call Lloyd Bridges.

INT. DOLPHIN TANK - MOMENTS LATER

While eating sunflower seeds, Ace meticulously examines the tank, including the scratches where the hand banged up against the wall when Snowflake was stolen. All the while, he is singing a bastardized version of the theme from, "Flipper."

ACE

…Wonderful Flipper… glorious Flipper… magnificent Flipper… The flippiest Flipper…

Podacter and Melissa, watching from the rim, look at each other like, "What have we gotten ourselves into?" Podacter spots something.

    PODACTER

Oh, great.

    A hoard or reporters are headed their way.

PODACTER (CONT)

I'll try to head them off.

MELISSA

(to Ace)

Get out of the tank.

ACE

(still singing)

…Can't hear you Flipper, Flipper… Lookin' for Flipper, gotta find Flipper…

MELISSA

I said, get out of the tank! Now!

    The reporters draw closer. Podacter heads them off.

    REPORTER

So where's Snowflake?

PODACTER

Ah… Snowflake is just, ah, not available right now.

    REPORTER

Come on, I'm supposed to get a shot of his new trick for the evening news.

REPORTER #2

What? Is he sick?

    Other reporters chime in.

VARIOUS REPORTERS Did something happen to Snowflake?! What're you hiding..?!

Melissa and Podacter don't know what to say. Then, a strange voice is heard.

ACE/HEINZ (O.S.)

(unrecognizable accent)

How cun I be getting dis vork dun mit all da shouting? What for is dis shouting?

    REPORTER

    Who the hell is that?

    MELISSA

    That? That's…

ACE/HEINZ

Heinz Kissvelvet. I am Trainer of Dolphins. You vant to talk to ze dolphin, you talk to me!

    REPORTER

What happened to the regular trainer?

    ACE/HEINZ

    Vy do you care about the dolphin? Do you know him? Does he call you at home? Do you have a dorsal fin?

    (beat)

    To train ze dolphin, you must zink like ze dolphin. You must be getting oonside ze dolphin's head! Just yesterday I'm asking Snowflake… "ee, eee, eee." He said, "Eee, eee, eee, eee." Und you can quote him.

    Ace spits at the reporters' feet. Podacter jumps in.

PODACTER

Gentlemen, please, Coach Shula's press conference is just about to begin. Why don't I take you over there and let, ah, Heinz, do his job.

    He ushers the press away.

MELISSA

(sotto to Ace)

Are you finished, Heinz?

    ACE

    Not yet.

    Ace goes to the filter outside the tank, opens it, and pours out its contents – mainly leaves, small twigs and gunk. He roots through it, notices a very tiny amber stone. He smiles to himself.

    ACE

Now I'm finished.

EXT. METRO POLICE DEPARTMENT - LATER THAT DAY

A flurry of activity in the detective division. As Ace enters, several cops taunt him on sight, led by the obnoxious, SERGEANT AGUADO.

    AGUADO

Hey, Ventura! Make any good collars lately?

    ANOTHER COP Or were they leashes?

    They all bust up. Aguado spots a bug on the ground.

    AGUADO

Uh oh.

(steps on the bug)

Homicide, Ventura!

    The cops are falling all over themselves laughing.

    AGUADO

How you gonna solve this one?!

    Ace walks up to them and looks at the squashed bug.

    ACE

Good question, Aguado… first I'd establish a motive. In this case the killer saw the size of the bug's dick, and became insanely jealous.

    The other cops all react with a big "ooooooo". Aguado has no comeback. Ace comes face to face with him.

    ACE

    Then I'd lose thirty pounds porking his wife.

Aguado suddenly loses it and swings at Ace.

    With a lightening move, Ace sidesteps the punch and forces Aguado's face down next to the dead bug.

ACE

Now kiss and make up.

    Ace walks off.

ACE

(to himself)

LLLOOOSER!

    Ace walks to the desk of EMILIO ECHAVEZ, a young energetic member of the homicide division. Ace has a silly impish look on his face.

ACE

(playfully)

I miss you.

    EMILIO

It's not a good time, Ace. If Einhorn sees me talking to you I'm gonna be history.

    ACE

Okay. Just tell me what you got on Snowflake. That's all I need.

EMILIO

…I can't say anything. My hands are tied.

ACE

(effeminate)

SOUNDS LIKE MY KIND OF A PARTY.

    A cop comes to Emilio's desk.

COP

LOOK ALIVE, EINHORN'S ON HER WAY DOWN.

EMILIO

Ace, please?!

        ACE

    Just tell me who's working the case?

EMILIO

Aguado.

    ACE

Aguado?! He's pimple juice! He's the poster child for lead paint chip eaters!

    EMILIO

Look, Ace. We're a little busy with murderers and drug dealers. A missing dolphin isn't exactly a high priority.

    The elevator is getting closer.

    EMILIO

Ace, gimme a break will ya?

    Ace nonchalantly sits back in a chair, pops a sunflower seed into his mouth and cracks it loudly.

EMILIO

(quickly)

Okay, okay. We checked all the local animal rights groups, taxidermists, and we're running a check through DMV on all recent van rentals. So far, nada.

ACE

Any unusual bets being made?

    EMILIO

    Ace, it's the Super Bowl, of course there's bets being made.

    ACE

What'd you find out about the tank?

EMILIO

Nothing weird. Just the tire tracks and the exit route. The guard didn't see anything.

ACE

That's it?

EMILIO

That's it. I swear. Now please go away!

ACE

You know something?

    (again impish)

YOU'RE NICE!

Ace gets up and exits the room. Then just as Emilio sighs with relief, Ace pops back in.

ACE

What about crazy Philly fans?

    The elevator bell rings. Out steps police LT. LOIS EINHORN, mid 30s, with a slender build, a great pair of legs and a bad tude.

    ACE

Holy Testicle Tuesday!

    EINHORN

    (to Emilio)

What the hell is he doing here?

    ACE

    I came to confess. I was the second gunman on the grassy knoll.

    EINHORN

Spare me the routine, Ventura. I know you're working the Snowflake case. May I suggest you yield to the experts on this one? We'll find the porpoise.

ACE

(mock relief)

Whewww… now I feel better!

    Ace turns to go.

ACE (CONT)

Of course, that might not do any good. You see, nobody's missing a porpoise. It's a dolphin that's been taken. The common Harbor Porpoise has an abrupt snout, pointed teeth, and a triangular thorasic fin, while the Bottlenose Dolphin, or Tursiops Truncatus, has an elongated beak, round, cone-shaped teeth, and a distinctive serrated dorsal appendage. (beat) But I'm sure you already knew that. (beat) That's what turns me on about you. Hey… maybe I'll give you a call sometime, lieutenant. Your number still 911? Alrighty then!

    Ace exits.

    CUT TO:

    INT. TEA ROOM - NIGHT

A wild thrasher club. An incredible thrash band is on stage cranking. Kids jump wildly into the moshing pit.

    Ace enters, sees a burnout at the bar whose head is circling insanely to the music.

ACE

(shouting)

Excuse me?! Is Greg here?!

    The burnout's head thrashes on. No acknowledgement of Ace.

ACE

Thank you!

    Ace heads for the basement stairs.

    INT. BASEMENT STAIRS - NIGHT

Ace descends the stairs, stopping at a large steel door. Ace bangs on it three times. A voice is heard from inside.

VOICE (O.S.)

Password!

    ACE

Tom Vu! I pay for sex! You can too!

    CLICK! The door electronically unlatches and slides open.

    INT. BASEMENT - NIGHT

Ace enters. Green Peace "Save the Whales" posters abound. GREG/WOODSTOCK, a laid back, ex-hippy with long gray hair, sits at a very impressive computer set up. Ace and he have their own distinct banter.

    A thud from above. Ace looks up.

    ACE'S POV

Part of the ceiling is made of metal grating, so you can see the bottom of the dance floor. A guy's face gets smashed into the grate. We see that it is the burnout from the club.

ACE

(to burnout)

Found him!

    WOODSTOCK

Hey! St. Francis! How's it goin?

ACE

Super, and thank you for asking. Hope you're having a nice day.

WOODSTOCK

Do you?

    ACE

    Don't I? And what are you up to?

WOODSTOCK

Just watching the fishies, man.

    There is a BLIP on the computer screen.

    WOODSTOCK

Alright, you're just in time for the party. You see those blips?

ACE

I certainly do.

    ON THE SCREEN

A map with several ships on the ocean.

    He quickly taps in some commands and the ships start sailing in all different directions.

    WOODSTOCK

That's a Norwegian whaling fleet. I'm sending them new directional coordinates… They'll find Jimmy Hoffa before they find any Humpbacks.

ACE

Gravy.

    Woodstock moves to a different screen.

    WOODSTOCK

Check this out.

    More computer graphics come up on the screen.

    WOODSTOCK

Just changed the formula for Purina's puppy chow.

(turns to Ace)

Too much filler, don't ya' think?

    ACE

    (acting turned on)

I'm very attracted to you right now.

Woodstock chuckles.

    WOODSTOCK

Are you?

    ACE

    Aren't I? Can you still tap into all the aquatic supply store in the area?

WOODSTOCK

Of course I can. Why?

    ACE

    I want to trace the sale of any equipment for transporting or housing a dolphin within the past few months…

WOODSTOCK

C'mon, Ace. I thought you might have a challenge for me…

Woodstock starts hacking away.

    ACE

Okay then, try to remember the sixties.

    WOODSTOCK

Wow! God one! Let's see… Marine winch sling, feeder fish, 20,000 gallon tank…

He waits. We hear a beep.

    WOODSTOCK

That's it. I found the culprit.

ACE

Who is it?

    WOODSTOCK

    (dramatically)

…Sea World.

    ACE

…bastard.

    WOODSTOCK

Hang on, hang on…

(He taps a couple keys)

Well, what do we have here? That's a lot of equipment for a civilian.

The printer spits out some data. Woodstock rips off the page and hands it to Ace.

    ACE

Ronald Camp? The billionaire?

    WOODSTOCK

    Billionaire and rare fish collector.

    ACE

RRREHEHEALLY!

    A PICTURE OF CAMP

Comes up on the computer screen.

    WOODSTOCK

That, my friend, is the face of the enemy.

    He pages through his file on screen.

    WOODSTOCK

…Always tryin' to get his hands on endangered species…

Newspaper articles fill the screen. One shows a picture of Camp and some Dolphin players.

    ACE

Hold on, this guy's connected with the Dolphins?

Ace leans in.

WOODSTOCK

Camp donated the land the new stadium's built on.

(re: article)

Oh, look at this, he's throwin' another, "I'm the richest man in the universe" party.

ACE

(thinking)

Hmmm… I wonder if I can find myself a date.

    INT. CAMP'S MANSION - NIGHT

It's a magnificent home. There is an extremely formal party in progress. Twenty to thirty people having champagne, caviar, and hot air. We see Dan Marino sitting with an audience around him.

DAN

We just choked in 82. We had a chance to win and we didn't. But nobody's gonna choke this time; if they do, I'll kill 'em!

    Everybody laughs.

    EXT. CAMP'S MANSION - NIGHT

Ace and Melissa climb an impressive stairway leading to Camp's mansion.

MELISSA

I'm really going out on a limb here, Ventura. Camp's social events are strictly A-list.

ACE

(a la Love Connection)

'Well, Chuck… the date started off good, but just before we got to the party, she seemed to tense up.'

Melissa rolls her eyes, then taps a huge door knocker.

    MELISSA

I swear, if you do anything to embarrass me in front of Camp…

ACE

You mean like this?

    Ace starts doing a spastic body convulsion. Just then a bald-headed butler, who looks a little like Gavin McCloud, opens the door. Ace doesn't notice until Melissa hits him with her purse.

ACE

Owwwe!!!

    He sees the butler.

    ACE

Oh, hi Captain Stubing.

    Melissa storms in, already pissed.

    INT. CAMP'S MANSION - CONT

Ace and Melissa enter. Camp looks over.

    CAMP

Melissa! Glad you could make it! Oh, and who is this?

    MELISSA

    This is my date. He's a… lawyer.

CAMP

Well, does he have a name, or should I call him "Lawyer"?

    MELISSA

    I'm sorry, it's Ace - ah, Tom Ace.

    Ace is very unimpressed with her lying ability. He jumps in.

ACE

Tom Ace. Wonderful to meet you, Mr. Camp, and congratualtions on all your success. You smell terrific.

    CAMP

Ah, well, thank you. Please, come in.

Ace boldly leads the way over to an hors 'oeuvre table. Melissa closely follows.

MELISSA

(sotto)

This is insane. There's no way that Camp stole Snowflake.

ACE

(spreading pate' on a cracker)

Will you just keep him occupied, while I work my magic please.

    She crosses the room. He puts the cracker in his mouth and begins to crunch. A man in a tux beside Ace spreads pate' on his own cracker.

ACE

(with a mouthful, to man)

Smooshy, isn't it?

Off the stuffy man's reaction…

INT. CAMP'S MANSION - SECONDS LATER

Ace approaches Camp.

    ACE

Excuse me, Ron, I need to use the bathroom?

    (palms his stomach, whispering loudly)

I think it's the pate'.

    CAMP

Um, it's just over there.

ACE

Thanks. Stuff probably looks better on the way out, huh?

    Ace laughs, slaps Camp hard on the back and heads for the bathroom.

    INT. BATHROOM - CONT

Ace wastes no time. He locks the door, turns on the water faucet, steps onto the toilet seat, opens and climbs out a window.

    EXT. MANSION COURT YARD - CONT

Ace drops to the ground. He follows a pathway, through a gazebo and into a doorway, all the time quietly singing the musical score to 'Mission Impossible'.

    INT. CAMP'S MANSION - FISH TANKS - CONT

Ace browses through a myriad of dramatically lit, salt water tanks, still singing. They're all filled with colorful exotic fish. Very impressive, but nothing large enough to house a dolphin. He continues on towards a large door.

INT. TANK ROOM - SECONDS LATER

A huge above-ground tank is covered with curtains to discourage onlookers. Ace swings open the large door and enters.

    ACE

Gravy.

    Ace climbs a ladder on the side of the tank, singing more intensely now. The ladder leads to a narrow catwalk over the center of the water. Ace grabs a feeder fish from a pail and walks carefully out there.

    CLOSE ON ACE. THIS IS IT.

    He looks into the dark pool, but sees nothing. Now he stops singing, quietly squats down and dangles the fish over the water.

ACE

(gently)

Snowflake… Here, Snowflake… Snooowflaaaake…

A GREAT WHITE LUNGES OUT OF THE WATER AND SNAPS ITS JAWS AN INCH FROM ACE'S FACE!!! NEEDLESS TO SAY, ACE IS A TAD SURPRISED.

He reels back, falling off the catwalk, into the water.

    INT. CAMP'S MANSION - SAME TIME

Melissa is admiring some beautiful tropical fish. Camp approaches.

    CAMP

Wonderful, aren't they?

MELISSA

(nervously)

Yes. They're incredible.

CAMP

No matter what is going on in my life, I can always watch them swim and be completely at peace.

    INT. INDOOR POOL ROOM - SAME TIME

The water is still for a moment. Then, Ace breaks the surface.

ACE

(frantic, to himself)

It's not Snowflake… It's not Snowflake.

    Instantly, Ace's body is thrashed around back and forth through the water, the entire length of the pool.

ACE

(screaming)

IT'S NOT SNOWFLAAAAKE!!! IT'S NOT SNOWFLAAAA!!!

    INT. CAMP'S MANSION - LATER

A line is forming outside the bathroom. Camp and Melissa are seated nearby. He's getting curious.

CAMP

Are you sure he's okay? It's been an awfu;;y long time.

    MELISSA

Who, Tom? Oh, I'm sure he's fine.

    Ace suddenly opens the bathroom door and stands there, completely drenched from head to toe, with his pants in shreds. Everyone stops. They all stare at Ace in amazement.

ACE

(loudly to the entire room)

DO NOT GO IN THERE!

    (fanning the air)

Whewww!!

    EXT. CAMP'S MANSION - LATER

Ace and Melissa are exiting. Camp stops in the doorway.

CAMP

(still confused)

I'm very sorry, Mr. Ace. I'll have the pluming checked immediately.

    ACE

Be sure that you do. If I had been drinking out of that toilet, I might have been killed!

    Ace shakes Camp's hand and notices his ring. He holds on to get a better look. It's a very distinct, commemorative ring.

    Camp wants his hand back but Ace won't let go. Melissa finally drags Ace away.

MELISSA

We'd better go.

Camp looks on and shakes his head.

    INT. MELISSA'S CAR - NIGHT

Ace is thinking. Melissa is pissed.

    MELISSA

…Y'know, I don't even want to know why your pants are missing! I don't care what happened! You could have cost me my job.

ACE

(on his own wavelength)

I was wrong about Camp. He's breaking the law but he's not our guy.

    MELISSA

It's a sure thing! It's definitely him! Just get me in there! Let me work my magic!

    Ace takes the stone out of his pocket and studies it intensely.

    ACE

This is the key. Right here!

    MELISSA

Hiring you was the biggest mistake I ever made!

    ACE

So small! So unnoticeable! Yet an invaluable piece… of our twisted little jigsaw puzzle!

    Melissa stares at Ace like he's gone crazy. There is a flash of headlights and a car horn. Melissa swerves back into her own lane. Ace drops the stone somewhere on the seat and begins to search for it frantically.

ACE

Damn it!

    (to Melissa)

Try to keep it on the road.

    INT. MELISSA'S LIVING ROOM

Melissa enters, followed by Ace.

    MELISSA

So, you found a pebble in Snowflake's tank. Excuse me while I call CNN.

ACE

I found it in the filter. And it's not a pebble. It is a rare, triangular cut, orange amber.

Ace hands Melissa the stone and quickly goes to one of her bookcases.

    MELISSA

What are you talking about?

    ACE

    Tonight I saw the exact same stone in Camp's ring.

Ace finds a book on the Dolphin team and flips through it.

    MELISSA

I thought you said he didn't do it.

ACE

N. Camp's clean. His ring wasn't missing a stone. But whoever was in that tank had a ring just like his.

    MELISSA

Wait a second. What ring?

    Ace hands her the book. It's open to a photo of…

ACE

The 1982 Dolphin AFC Championship ring.

    Melissa holds the stone up to the picture. It's a perfect match.

ACE

I find the ring with the missing stone, I find Snowflake.

    MELISSA

How are you gonna do that?

    ACE

    Simple.

        MUSIC UP

CUT TO:

    EXT. TRACK - DAY

Ace is wheezing and gasping for air as he struggles to jog up beside a large man who's running around the track at a very fast pace. When he finally catches up, he awkwardly tries to catch a glimpse of the man's ring and trips. The man just keeps going.

    INT. FOOTLOCKER - DAY

Ace sits waiting with one shoe off. The store manager, an ex-player for the '82 team, sets down several shoe boxes. Ace checks out the ring.

CLOSE ON

A poster of the '82 team. The player we just saw is being crossed out.

EXT. HOTEL - DAY

Pan a few kids getting autographs from Marino and other players, ending on Ace dressed up and looking like a pimply kid. As the players sign, he checks their rings.

    EXT. TRACK - DAY

Ace is again trying to catch the large man on the track. This time, just as he draws near, the man leaves him in the dust.

    INT. SPORTS BAR - DAY

Two big guys finish arm wrestling. Ace steps up to challenge. He spends an undue amount of time preparing his grip, as he checks out the ring. Ace finally gets set and gives the "go ahead" nod. He is instantly thrown across the room.

    CLOSE ON

The poster of the '82 team. Another group of players are being crossed out.

EXT. STREET

Ace spots a player driving along side him. He can't see his ring.

Ace deliberately cuts off the player's car and flips him off. The angry player flips Ace off. We see his ring is intact. Ace waves and drives off.

INT. MEN'S ROOM

One huge lineman uses a urinal. Ace, using the urinal next to him, nonchalantly tries to catch a glimpse of the guy's hands. The Lineman has a very angry look on his face, but after a beat it changes to a "come on" smile.

CLOSE ON

The poster of the '82 team. There is only one face that has not been crossed out. Ace circles it.

EXT. TRACK - DAY

Once again we see the large, fast man jogging toward camera. Suddenly Ace runs up behind him, with a desperate look on his face, pouring a bottle of chloroform into a cloth. He leaps onto the man's back, smothering him with the cloth and holding on for dear life. The man slowly gives up the fight and collapses. Ace casually checks the ring, then walks away disappointed.

EXT. MELISSA'S BACKYARD - EARLY EVENING

Ace sits in a lawn chair depressed. Melissa consoles him.

    MELISSA

Ace, that stone could have come from anywhere. An earring, a necklace…

ACE

(with murder in his eyes)

It came from an '82 AFC Championship ring.

MELISSA

Lt. Einhorn thinks it was an animal rights group. Have you heard of FAN?

    ACE

    Free Animals Now? Started in 1982 by Chelsea Gamble, daughter of the famous industrialist, Fischer Gamble? Over half a million members from Florida to Finland?

    (beat)

    No. Who are they?

    MELISSA

    Did you know that last year they sent threatening letters to 127 college teams, demanding the release of their mascots? At last count –

ACE

What do you feed your dog?

    We see Melissa's dog lying near Ace's feet.

    MELISSA

Ah… dog food, why?

    ACE

    He's miserable.

MELISSA

What are you talking about?

    ACE

    He's just very unhappy, I feel sorry for him. Bad diet, isolated environment. It's amazing he's still alive.

MELISSA

You're just mad because your stupid pebble theory didn't work out and you don't know how to express your anger.

ACE

Yeah? And you're ugly.

MELISSA

I'm not even gonna' talk to you, please leave.

    ACE

What, so you can beat him? Fatty!

    MELISSA

You… are unbelievable.

    The phone rings inside the house. Melissa goes to answer it.

    MELISSA

Hiring you was a huge mistake!

    The door slams and Ace is alone with the dog. After a moment he reaches down to pet it and we all see that it is one of the happiest dogs in the world.

    ACE

You like her, huh?… Yeah, she's alright.

Ace, feeling guilty, walks into the house.

    INT. MELISSA'S DEN - CONT

Ace walks toward Melissa.

    ACE

Look, Melissa, I, ah…

Ace stops when he sees Melissa. She is sitting, holding the phone in her lap with a completely stunned look on her face. Something is very wrong.

    EXT. HIGH RISE APARTMENT BUILDING - NIGHT

Chaos. Police, lights flashing, paramedics, crowds of people.

    Ace and Melissa see Roger Podacter's body taken away in an ambulance.

ACE

You okay?

    Melissa nods bravely. Emilio joins them.

    ACE

What'd you find?

EMILIO

Podacter, Roger. Routine suicide. He was alone. He'd been drinking. No sign of a struggle. Neighbor heard him scream on the way down. Just your classic fifteen story swan dive.

Melissa shudders. Ace gives Emilio a "way to go" look.

    EMILIO

Sorry.

    INT. HIGHRISE LOBBY - NIGHT

The three enter. Emilio pushes the button for the elevator.

    MELISSA

It just seems so out of character. He was going to retire in two years.

    ACE

Did he leave a note?

    The elevator arrives.

    EMILIO

No. That's nothing unusual. Some do, some don't. He didn't.

The elevator doors close.

    INT. PODACTOR'S APARTMENT - MOMENTS LATER

Police are everywhere. Emilio, Ace and Melissa enter and are immediately approached by one of the officers.

    EMILIO

Miss Robinson, this is officer Carlson.

    CARLSON Evening, ma'am. I wonder if you could answer a few questions about the deceased?

Ace slips away, we follow him as he eavesdrops on conversations.

NEIGHBOR

(to a cop)

I told you, I was across the hall in my apartment, I heard a scream. The door was locked, so I called the manager…

The Manager reiterates her story to the cop. The Manager is about 100 years old.

    MANAGER

…The place was empty, except for the damn dog in the other room. Then I opened the balcony door, looked over the railing, and… splat, bang, pancake time…

Ace, continuing his investigation notices…

PODACTER'S DESK

in perfect order.

    Next, he notices police coming in and out of the balcony, closing the door behind them, shutting out the noise.

    INT. PODACTER'S BEDROOM - NIGHT

A dog is cowering in the corner. Ace tries to comfort the little guy.

    ACE

Hey, fella, have a bad night?

    Ace examines its paws.

    Ace then gets down and finds scratches in the door. TWO FEET interrupt.

    Ace stands. He is face to face with Einhorn.

    EINHORN

    Who let Dr. Doolittle in?

    Emilio steps in immediately.

    EMILIO

Ah, Lieutenant. He came with Miss Robinson –

EINHORN

This is official police business. We'll let you know if the coroner finds any ticks.

Cops snicker.

    EMILIO

I just thought since Melissa –

ACE

E, forget it. She's right. Besides, I wouldn't want someone tracing my steps and pointing out all the mistakes I made.

    Ace crosses to…

EXT. PODACTER'S BALCONY - CONT

Ace examines the area. Einhorn is in hot pursuit.

    EINHORN

Oh, so, you don't think this in an obvious suicide, Mr. Pet Detective?

ACE

Well, I wouldn't say that. Lord knows, there is plenty of evidence here to support your theory, except of course that spot of blood on the balcony.

On the railing, sure enough, there is a tiny spot of blood.

    Einhorn glares at a couple of nearby cops. They look down.

    ACE

May I tell you what I think happened? Alrighty then!

    Ace moves as he talks.

    ACE

Roger Podacter went out after work. He had a few drinks, and he came home. But he wasn't alone. Someone was with him in this apartment. There was a struggle, and then Roger Podacter was thrown over that balcony. Roger Podacter didn't commit suicide. He was murdered.

    A beat as everyone considers this.

    EINHORN

Well, that's a very entertaining story, but real detectives have to worry about that little thing lawyers call evidence.

Ace picks up a lottery ticket on Podacter's desk and becomes a condescending kid show host.

ACE

Let's take a trip to clue corner, shall we? Can anyone tell me why a man buys a lottery ticket on the day he is going to commit suicide? Or why the family pet, suffering from acute canine trauma, clawed at the bedroom door until his paws bled? How about the blood on the railing? I'll bet if we put our thinking caps on we'll see that it was the result of the struggle that took place inside this apartment while Mr. Podacter was still alive!

(singing)

NEXT TIME YOU DON'T HAVE A CLUE COME ON BACK TO CLUE CORNER! BOOP!

Everyone looks to Einhorn.

    EINHORN

Not a bad try for a pet detective, but not near conclusive enough for us real investigators.

(beat)

First, people buy lottery tickets everyday. It's a habit. It doesn't prove a thing. Second, the dog wasn't suffering from canine trauma, he was suffering from bladder trauma. Sergeant Neilson found a piss stain as big as Lake Huron near the bed. And third, the blood on the railing. Simple. He doesn't jump far enough and whacks his head. A fact confirmed by the paramedics who found cuts on his scalp, with traces of a white chalky substance. i.e. plaster from the balcony.

    Einhorn shows Ace the paramedics report. Everyone is impressed with Einhorn.

    EINHORN

    So much for your murder, Ventura.

    AGUADO

Uh oh, I think I heard a toilet flush. Maybe someone lost their turtle?

    Everyone has a laugh. Ace looks beaten.

    ACE

Well, maybe I'm just a little out of my league, here. Einhorn…

Ace holds out his hand, Einhorn shakes it.

    ACE

…good work.

    Ace and Melissa head for the door.

    ACE

Oh, there is just one more thing, Lieutenant.

(re: the neighbor)

This man is Roger Podacter's neighbor. He lives across the hall. He said he heard a scream, is that right, sir?

The neighbor nods. Ace turns to the apartment manager.

    ACE

And you said you had to open the balcony door when you keyed into the room?

    MANAGER

    That's right.

Ace walks out onto the balcony and turns, facing them.

    ACE

You're certain you had to open this door?

She nods.

    EINHORN

What's the point, Ventura?

ACE

Only this… AAAAAAAWWWWWWWWWWW…

Ace sustains an incredible Pavorati note, while he repeatedly opens and closes the glass door between them. When the door is closed nothing can be heard.

ACE

(tapping the door)

This is double paned, sound- proofed glass. There's no way this neighbor could have heard Podacter scream on the way down with this door shut. The scream he heard came from inside this apartment, before Podacter was thrown over the railing! And the muderer closed the door before he left!

(celebrates insanely)

Yes! Yesss! I have exorcised the demons!

    (a la Poltergeist)

This house is clear.

    INT. ACE'S CAR - A SHORT TIME LATER

Ace drives straight ahead.

    MELISSA

What are you thinking?

    ACE

    I'm thinking this whole thing is connected somehow.

(frustrated)

I'm thinking I want to find that other ring!

MELISSA

You checked all the rings.

    ACE

I know, Pessimistress. Could anyone else have gotten a ring that year?

    MELISSA

    No. Camp was the only honoree. Just players and coaches. Everyone in the photo.

    ACE

…Receipts! There must be receipts! You have a key to the office.

    MELISSA

Ace this has been a really tough day. Can't we do this in the morning?

Ace looks at his watch.

    ACE

Absolutely.

    EXT. DOLPHIN HEADQUARTERS - 1:00 AM

Ace's car screeches to a stop, in front of the building. Ace jumps out, followed by Melissa.

INT. DOLPHIN HEADQUARTERS - HALLWAY - NIGHT

It's dark. Team pictures adorn the walls.

MELISSA (O.S.)

These files go back to seventy- eight.

    INT. DOLPHIN OFFICE - CONTINUOUS

Ace is flipping through a file cabinet, looking at receipts. Melissa is starting to warm to him.

    MELISSA

That was pretty impressive, what you did back at the apartment.

ACE

(still looking)

You don't have to tell me. I was there.

MELISSA

Maybe you should have joined the police force… become a real detective.

ACE

(shaking his head)

I don't do humans.

Melissa gets a bit closer.

    MELISSA

You really love animals, don't you?

Ace stops searching and looks into her eyes.

    ACE

I feel a kinship with them. I understand them. Wanna hear something kinda spooky?

    MELISSA

    Sure.

        She gets closer still.

    ACE

One time, when I was about twelve, I had this dream that I was being followed by a dog with rabies. He had these really bloodshot eyes and foam coming out of his mouth… and just before I got to my front door… he jumped on me and sunk his teeth in. Then I woke up, and felt the back of my neck… check this out.

    Ace motions for Melissa to feel the back of his neck, but when she does, he snaps at her hand, barking like a vicious dog.

    ACE

ARARAR!!!

    Melissa jumps out of her skin.

    MELISSA

Ohhh!! You bastard!

    ACE

    (snickering)

I'm sorry. I couldn't stop myself. Are these all the receipts?

    MELISSA

    (mildly annoyed)

I don't know.

ACE

There's only a dozen of them here.

Ace turns from the file cabinet with a hopeless look on his face. Melissa begins to clean up his mess.

MELISSA

(pointedly)

Gee… maybe they were misplaced because somebody didn't put the files back when he was…

ACE

Who the hell is that?

    MELISSA

    What…

Ace crosses to a big picture of the '82 team that hangs on the aadjacent wall and points out a player.

ACE

That! Who the hell is that?!

    He quickly pulls out his crossed out pictures of the team and begins to compare the two.

    MELISSA

Oh, that's Ray Finkle… the kicker. Don't you know who Ray Finkle is?

    ACE

    No! How come he's not in this picture?!

Melissa checks Ace's photo.

MELISSA

This was the picture you were using? This was taken earlier in the year. Finkle wasn't added to the roster till mid-season.

She starts to realize what Ace has already figured out.

MELISSA (CONT'D)

He's the guy that missed the final field goal in the Super Bowl that year. Cost the Dolphins the game.

ACE

But he got a ring?

    MELISSA

    Definitely.

        INT. STADIUM/PUBLIC RELATIONS OFFICE - LATER

Ace and Melissa look through Finkle's file on a microfiche screen. Newspaper articles, headshots flash before them…

MELISSA

'Replacement Kicker Having Great Year'… 'Ready For Super Bowl, Confident Kicker Boasts'.

    ACE

'Field Goal Sails Wide, Dolphins Lose Super Bowl'.

    MELISSA

The kick heard round the world. That was Finkle. The Dolphins lost by one point.

    Another headline hits the screen: FINKLE CONTRACT NOT RENEWED.

    MELISSA

Poor guy.

    ACE

Poor guy with a motive, baby. Where is he now?

    MELISSA

    Last I heard, he went back to his home town, Collier County. He used to work in a bar up there.

ACE

(pondering)

REHEHEALLY.

    MELISSA

Can you drop me off before you go?

    ACE

    (shaking his head)

No way. It may not be safe at your apartment, and you shouldn't be left alone.

MELISSA

What do you suggest?

    CUT TO:

INT. ACE'S BEDROOM - LATER

We see a person's butt under a sheet coming up into frame repeatedly.

SKIN, SWEAT, SHEETS FLY, as Ace and Melissa roll back and forth on the bed. Ace is taking no prisoners.

    CUT TO:

    50 animals at the bottom of the bed, with eyes as big as silver dollars, watching them silently. We cut back and forth between furious lovemaking and shots of staring animals.

    Melissa and Ace simultaneously reach the pinnacle of pleasure.

MELISSA

(totally amazed and exausted)

OH man… oh man! Oh wow!

    ACE

    (mock embarrassment)

I'm sorry… that's never happened to me before. I must be tired.

    EXT. HIGHWAY ONE - DAY

Various traveling shots of Ace en route to a 'Deliverance' type town deep in the Everglades. A sign reads "Gas - Food - 2 Miles" but the word "Food" is crossed out.

    INT. BILBO'S GAS STATION - DAY

A pitifully sad country song plays on the radio. FERN BILBO sits at his cluttered desk with the end of an old shotgun in his mouth. He is struggling to reach the trigger.

    Through the glass behind him, we see Ace's car pull up to the only gasoline pump.

DING! The bell rings. Fern begrudgingly takes the gun out of his mouth, sets it down and walks out.

    EXT. BILBO'S GAS STATION - CONT

Ace gets out of his car.

    ACE

Excuse me, sir. Do you know where I can find the Pigskin Sports Bar?

    FERN

    Do I have a "kick me" sign on my back, son?

    ACE

    I wouldn't know anything about that, but if you could point me toward the bar.

Fern breaks down, sobbing.

    FERN

They all left me… all of them!

    ACE

Well… Hypothetically speaking, say they all left you and went to the Pigskin Sports Bar. How would they have gotten there from here?

    FERN

    Two miles down and take the first left.

    ACE

Thanks very much! Take care now, 'bye 'bye then!

    Ace gets into his car and pulls out.

    INT. BILBO'S GAS STATION - CONT

Fern enters, sits down at the desk, places the end of the shotgun in his mouth, reaches for the trigger and…

DING! Another car pulls up to the pump. Exasperated, he takes the gun out of his mouth.

FERN

(murmers to himself as he gets up)

Can't get anything done around here…

EXT. PIGSKIN SPORTS BAR - DAY

A weathered dive in the middle of a swamp. Ace parks.

    INT PIGSKIN SPORTS BAR - DAY

If depression had a home, this is it. Several dejected men, with various degrees of missing teeth, sit around the bar. A couple hapless guys play pool. One throws darts.

    Ace enters, pops a sunflower seed in his mouth and addresses the room.

    ACE

Excuse me, guy?! My name is Ace Ventura, I'm a pet detective. I'd like to ask you a few questions if I could.

    No one even looks at him.

    ACE

Just a few questions, that's all.

Still no one reacts.

ACE

(very up)

Who wants gum?!

    Again, no reaction. Ace walks over to the bartender and slides a five across the bar.

    ACE

I'm looking for a guy who used to work here.

The bartender takes the money.

    BARTENDER

That right?

    ACE

    He was a kicker for the Dolphins. Ray Finkle.

    A pool ball flies by Ace's head shattering a mirror behind the bar. All eyes are on Ace.

ACE

(to guy who threw it)

That would be a scratch.

    TOOTHLESS GIANT

You a friend of Finkle's?

ACE

(thinks)

…Yes?

    CRASH! The giant guy smashes his bottle.

    ACE

Sorry, I have "say the opposite of what you mean" disease.

    Several undesirables surround Ace.

    TOOTHLESS GIANT

That bastard ruined this town.

    ACE

Ewww… I hate that!

    HICK #2

We bet everything we had on that Super Bowl and that son of a bitch gagged.

    ACE

What a diiick!

    They all move closer in a threatening manner.

    HICK #3

Shanked a goddamn 26 yarder!!!

    ACE

Death to Finkle! Death to Finkle!

    The bartender steps in.

BARTENDER

We had a hell of a thing going here. Tourists coming to see Ray Finkle's home town. He was standing right over there when he got the call from the Dolphins.

The bartender points to a payphone. It has had the shit beaten out of it. Every expletive you can think of is graffitied around it.

    ACE

Did he come back after the Super Bowl?

    BARTENDER

    Yeah… but the boys here had ways of letting him know he wasn't welcome.

HICK #1

Excuse me, I gotta take a wicked Finkle.

    Laughter.

    TOOTHLESS GIANT

What's the difference between Finkle and a jackass? A jackass can kick.

More laughter.

    HICK #2

Why did Finkle cross the road?!

        ACE

        (facetious)

    Wait… I know this one.

    HICK #2

He didn't! And I've got the hair on my bumper to prove it!

    Maniacal laughter and chanting ensues.

    MOB

FINKLE SUCKS! FINKLE SUCKS! FINKLE SUCKS!

    ACE

It's good you're dealing with the anger.

(beat)

I don't suppose anyone's seen him lately?

    The chanting stops and the guys all look at Ace.

    BARTENDER

No… but we know where his parents live! Don't we boys?!

HICK #1

Yeah! We sure do!

    They all laugh insanely again.

    EXT. HOUSE - DAY

Ace pulls up outside a two-story stilt house. The place has been completely desecrated by graffiti, bullet holes and paint bombs. Toilet paper is strewn through the trees. Ace walks up and knocks on the door. A wooden peephole slides open revealing a suspicious pair of eyes.

    ACE

…Hi, I'm looking for Ray Finkle.

A gun slides out into Ace's face.

ACE

(with a gulp)

And a clean pair of shorts.

    A deep gruff voice from inside.

    VOICE

What do you know about Ray Finkle?

    ACE

    Southpaw soccer style kicker. Graduated from Collier High in June, 1976. Stetson University honors graduate, class of 1980. Holds two NCAA division one records. One for most points in a season, one for distance. Former nickname The Mule. The first and only pro athlete ever to come out of Collier County. And one helluva model American.

    After a beat the peephole closes. The door slowly creaks open revealing MR. FINKLE, an unsmiling, taciturn, elderly man holding the gun.

    MR. FINKLE

Are you another one of them scumbags from 'Hard Copy'?

    ACE

    No, sir. I'm just a very big Finkle fan. This is my Graceland, sir.

Mrs. Finkle, a sweet, adorable elderly woman comes over.

    MRS. FINKLE

Will you put that gun down. The boy's a fan of our son. So nice to meet you. I'm Ray's mother, and this is Ray's father.

    INT. FINKLE HOUSE - DAY

ACE

It's a real honor.

MRS. FINKLE

My Ray is so appreciative of his fans. He'll be so pleased you stopped by.

ACE

Are you expecting Ray anytime soon?

    MRS. FINKLE

    Oh, yes. I expect him home any minute.

    Ace is surprised.

    MRS. FINKLE

Would you like some cookies? I just baked them.

    Mrs. Finkle hurries off to the kitchen. Ace smiles at Mr. Finkle. The guy's a corpse.

ACE

Wow… Ray Finkle's house! Can't wait to meet him!

    MR. FINKLE

Ray ain't comin' home.

    ACE

But your wife said you expect him home any minute.

    MR. FINKLE

She expects him home any minute.

    He points to his head, and looks toward the kitchen.

    MR. FINKLE

Engines runnin but there's no one behind the wheel. Ten years ago our son escaped from Shady Acres Psychiatric Hospital in Tampa. They're still buggin' us to pick up his stuff.

Mrs. Finkle returns with a plate of football shaped cookies.

MRS. FINKLE

(sweetly)

It was all that Dan Marino's fault, everyone knows that. If he had held the ball laces out, like you're supposed to, Ray would never have missed that kick. Dan Marino should die of Gonorrhea and rot in Hell. Would you like a cookie, son?

    Ace takes a cookie. Holding it up.

    ACE

Hey, what do ya know. They're little footballs.

MRS. FINKLE

Laces OUT!

    CRASH!! A large stone smashes through the window. Outside, a pickup truck filled with drunken patrons from the Pigskin Sports Bar drives by yelling their Finkle chant.

    MOB

FINKLE SUCKS! FINKLE SUCKS!…

MRS. FINKLE

I told you he had a lot of fans.

    Mrs. Finkle picks up the rock and hurls it out the broken window. It hits one of the vandals, knocking him out cold, as the truck peels away.

MR. FINKLE

(aside to Ace)

She got the arm. The boy got the leg.

    INT. HALLWAY - A SHORT TIME LATER

Mrs. Finkle and Ace are walking down the hallway to Ray's room.

MRS. FINKLE

When Ray gets back and starts kicking again, he'll never even know he was gone. I kept his room just the way he left it.

She opens the door to Ray's room. Ace steps in.

INT. RAY'S ROOM - CONTINUOUS

It's a death shrine to Dan Marino. Complete with lifesize cutouts of Dan Marino, some with nooses around the neck, other hacked to pieces. Painted on the walls: "Death to Marino!", Marino must die!!!, etc.

ACE

…Oooh boy.

    MRS. FINKLE

What a sports nut, huh?

    In the center of the room is a movie projector.

    ACE

May I?

    MRS. FINKLE

    Oh yes. By all means.

    Mrs. Finkle shuts the lights off. Ace turns on the projector.

    The film flickers over the "Marino must die!!!" graffiti. It's the final play of the Super Bowl. Marino takes the snap, Finkle kicks and the ball sails wide. The film repeats itself ad infinitum.

EXT. BILBO'S GAS STATION - DAY

Ace on the payphone. We see the gas station in the background.

    ACE

Melissa, it's Ace.

INT. MELISSA'S OFFICE - DAY

MELISSA

Ace? Where are you?

    INTERCUT ACE/MELISSA

ACE

I'm in Psychoville and Finkle's the Mayor. Where's Dan Marino?

MELISSA

Marino? Why?

    ACE

    Because he's about to join Snowflake. I gotta know where he is.

MELISSA

Okay, hold on…

Melissa checks Marino's itinerary. Ace waits, impatiently.

ACE

(to himself)

Come on. Come on…

In the background, we see two paramedics exit the gas station office rolling a dead body on a gurney. The area of the sheet that covers the face is a giant red spot. We widen to see them load good old Mr. Bilbo into an ambulance and drive away, ringing the station bell one more time. Ace doesn't notice.

MELISSA

Ah, he had practice. Then… he has a commercial shoot out at the Prescott Sound Stage.

    ACE

Where is that?

    MELISSA

    It's on Route One by the Six Cut Off. Thirty minutes outside of town.

ACE

Okay, that's about fifteen miles from me. Call the police. Get extra security over there now.

MELISSA

Ace, tell me what's going on.

(beat)

Ace?…

The payphone dangles off the hook. Ace is…

EXT. HIGHWAY ONE - DAY

…in his car racing out of the swampland, his heaad now back out the window so he can see. He leaves a faded, old, barely legible sign in his wake: "

WELCOME TO COLLIER COUNTY. HOME OF RAY FINKLE"

The "F" in "FINKLE" has been replaced with "ST" in spray paint.

    INT. PRESCOTT STUDIOS - DAY

Rehearsal for an Isotoner ad in progress.

    MARINO

…So I protect the hands that protect me. With Isotoners.

    Marino gets carted off by FIVE HUGE LINEMEN.

    DIRECTOR

Good. Remember, exit camera right. That's to your left. Alright, let's get ready to shoot this.

    FIRST A.D.

(to the linemen)

Helmets on this time!

    The linemen disperse.

    EXT. STREET - DAY

Ace runs a red light causing cars to skid in every direction.

    INT. PRESCOTT STUDIO - DAY

Marino is in the make-up chair.

MARINO

(to make-up girl)

See, in 82 we just choked. We had a chance to win it and we didn't –

DIRECTOR

Dan, are you ready?

    MARINO

    Ah, sure.

(to girl)

I'll tell you later.

EXT. STUDIO - DAY

The cops race onto the lot.

    INT. STUDIO - DAY

Marino takes center stage.

    A.D. Quiet on the set… roll… speed…

DIRECTOR

…And action!

    MARINO

Hi, I'm Dan Marino. If anyone knows the value of protection, it's me…

We see an old clip of Marino getting sacked.

    EXT. STUDIO - DAY

Cops scramble on foot to the sound stage.

    INT. STUDIO - DAY

The commercial is winding up. The linemen ready themselves.

    MARINO

…So I protect the hands that protect me. With Isotoners.

    The five linemen grab Marino and run off camera.

    DIRECTOR

And cut! That was good. Again from one.

    But two of the linemen keep running with Marino…

DIRECTOR

I said cut!!

…And they keep running.

DIRECTOR (CONT'D)

What the hell are they doing?

…Right out the studio door. Then the cops arrive and race after them. Two linemen stumble out of the dressing room holding their heads.

    EXT. SOUND STAGE - DAY

Ace skids around a corner, looking way up ahead.

    He sees Marino being shoved into a black 81 Ford Bronco. They drive off.

    The cops come out of the building on foot. Too late.

    Ace in hot pursuit almost runs the cops down.

ACE

(yelling at cops)

S'cuse meee! Pet Detective!

EXT. CITY STREETS - DAY

Ace's head is out the driver's window through the entire chase. As he starts gaining on the bad guys, they start shooting. Ace wisely puts his head inside the car.

    ACE'S POV

He can't see shit through his broken windshield.

He pokes his head out again. They shoot again.

    Ace swerves off the road into…

EXT. PARK - DAY

Ace's car smashes through benches and tables. Then it flips over a few times and lands on its wheels with a horrid SMASH. Ace is still strapped into the drivers seat, unconscious.

Ace's prized WHITE PIGEON lands on the car door right beside him. Ace cracks his eyes and sees the bird. Then, with a sudden quick lunge he successfully traps it in his hands, and forgets all about Marino.

ACE

I did it! I did it! I caught the white pigeon! I caught the white pigeon!

    Ace jumps out of his car and starts skipping around the park with the pigeon held high over his head. He looks insane.

ACE (CONT'D)

(singing)

I caught the white pigeon, I caught the white pigeon, I caught the white…

Ace slows down and begins to look around warily. There are now an unusual number of birds perched on the telephone wires around the park and on the monkey bars, and on the swings.

    The sky grows darker. He slowly turns and tries to get back to the car. All the birds take flight.

    Ace sets the white pigeon free and starts to run, but it's too late. The birds are on him. Pecking, and gouging, and ripping his flesh.

Now we see ten birds flying away with a leg. Five birds flying away with an arm. Twenty others are trying to take Ace's left arm off, and half his face is missing…

ACE

AAAAAAAAAAHHHHHHHHHHHH!!!

    CUT TO:

    EXT. PARK - DAY

Ace is back in his wrecked car with his arm hanging out the window. A small boy is pulling it.

    BOY

Hey mister. Hey mister.

    Ace come to suddenly, and looks at the boy with a crazed expression.

BOY (CONT'D)

That was a really neat crash, mister. Do it again!

    Ace sighs with relief.

    EXT. MIAMI - DAY

    Various headlines hit the news stands: "MARINO KIDNAPPED" "STAR QB MISSING" "DAN WHERE ARE YOU?"

THE GLOBE HEADLINE: "MARINO ABDUCTED BY ALIEN FRANCHISE!" On the cover, Marino stands with several Space Aliens in football gear.

    EXT. POLICE STATION - LATER THAT DAY

A chaotic press conference. Zillions of REPORTERS shout all kinds of questions at Einhorn.

    REPORTER

Lieutenant, have there been any ransom demands?

    EINHORN

    There's been no communication with the kidnappers at this time.

REPORTER #2

What's going to happen to the Super Bowl? Will it be postponed?

EINHORN

As of now, the game is going on as scheduled.

    REPORTER #3

Why wasn't the public told about Snowflake's kidnapping?

    EINHORN

    Secrecy was essential. We didn't want any public interference.

REPORTER

Are the crimes related? And what about Roger Podacter's murder?

EINHORN

I'm sorry. I can't comment any further. Now if you'll excuse me.

Einhorn pushes her way through the crowd of reporters.

    INT. POLICE STATION - MOMENTS LATER

Einhorn is barking out orders to other cops as she heads for her office.

    EINHORN

Emilio, get me the autopsy on Podacter! Aguado, send out a memo. No one talks to the press…

INT. EINHORN'S OFFICE - CONTINUOUS ACTION

EINHORN

…And somebody get me a cup of coffee!

    ACE

    (TV announcer's voice)

Tonight on "MIAMI VICE", Crockett geets the boss coffee!

    Ace is in her office, popping sunflower seeds, kicking back. Einhorn walks to her private bathroom.

    EINHORN

Ventura, when I get out of this bathroom, you better be gone.

    ACE

Is it number one or number two?

    Einhorn turns and glares at Ace.

    ACE

I just want to know how much time I have.

    Einhorn goes to the sink and begins washing her hands.

    ACE

Oh, by the way, I went ahead and solved that pesky, Snowflake/Podacter/Marino thing.

EINHORN (O.S.)

(humoring him)

Oh yeah?

    ACE

    yeah, ever hear of a former Dolphin kicker named Ray Finkle?

    The water shuts off. Einhorn appears around the corner.

    EINHORN

Alright, Ventura. Make it quick.

    ACE

I found a rare stone at the bottom of Snowflake's tank. It's from a Dolphin '82 AFC Championship ring. It would have been a Super Bowl ring, but Ray Finkle missed the big kick. Blames the whole thing on Marino. We're talking paranoid, delusional psychosis. I saw the guy's room… Cozy, if you're Hannibal Lector.

    EINHORN

So how does Roger Podacter fit in?

    ACE

    My guess is Finkle was snooping around. Podacter recognized him. End of story. As for Snowflake… they gave him Finkle's number, and taught him how to kick a field goal. Finkle took it personally.

Einhorn listens with great interest.

    EINHORN

So where is Finkle, now?

    ACE

    He broke out of a metal hospital. Did a Claude Raines. He's been planning his revenge for years. Waiting for the perfect time to get back at the Dolphins. The time when it would hurt them the most. Super Bowl time! Man, I'm tired of being right!

    Einhorn walks in front and sits on the edge of the desk. She's totally softened her demeanor.

EINHORN

Congratulations. You've done some fine detective work, Ace.

ACE

Ahh, could you talk in my good ear. I thought I heard you call me Ace.

    Einhorn gets real close.

    EINHORN

Maybe I was wrong about you. Maybe you are more than just a pet dick.

    SHE SUDDENLY PLANTS A MAJOR, TONSIL CLEANING, OPEN MOUTHED KISS ON ACE. Objects are knocked off the desk as they lean back.

    ACE

Your gun's digging into my hip.

More kissing, the Ace stops.

EINHORN

(still coming on)

What's wrong, Ace? Want me to read you your rights?

ACE

Maybe later.

    EINHORN

What is it? That bony little bitch, Melissa Robinson?

    ACE

    (defensive)

    No. You just don't do anything for me.

He quickly adjusts his crotch, to conceal the erection. Einhorn withdraws with a coy smile.

    EINHORN

I'll be here if you ever want a real woman.

There's a sharp KNOCK at the door.

EINHORN

What is it?

    Aguado opens the door.

    AGUADO

Everything okay in here? Heard some commotion.

    EINHORN

Fine, Sergeant.

    AGUADO

You want me to throw him out?

    EINHORN

    Why don't you throw yourself out.

AGUADO

…Yes, ma'am.

A crestfallen Aguado exits. Ace heads for the door.

    EINHORN

Ace, I want you to leave everything to us.

    ACE

Can't do that, Lieutenant. I was hired to find Snowflake.

EINHORN

When we find Marino, We'll deliver Snowflake.

ACE

When I find Snowflake, I'll deliver Marino.

He exits.

    INT. TEA ROOM - NIGHT

A full on thrash metal band is cranking on stage. Kids leap wildly into the moshing pit. The same Burnout is still thrashing his head wildly to the music.

ACE

(shouting)

Nice to see you again!

    The Burnout just keeps thrashing. Ace spots Woodstock watching the band and joins him.

    WOODSTOCK

St. Francis, how's it goin'?

    ACE

    (kidding)

    That's none of your damn business.

WOODSTOCK

Isn't it?

ACE

Is it?

    WOODSTOCK

    Anything new on that dolphin?

    ACE

    Got his picture on some tuna cans, but nothing so far.

    A singer ROARS on stage. He sounds like a garbage disposal full of cutlery.

    SINGER Arroohhghhh! Myrrrooohghhhh! Geroooghhh!

    WOODSTOCK

So, what can I do for you today?

    ACE

    I need info on a football flunky named Ray Finkle.

    WOODSTOCK

Sorry, Ace, I can't help you right now. I gotta watch this band! They are the shit!

ACE

Are they?

    WOODSTOCK

    Aren't they?

ACE

Alright then. Don't worry about it. I mean dolphins aren't exactly an endangered species. It's not like the whole food chain's gonna be affected if one highly intelligent mammal dies a slow and painful death! Hell, if the band is loud enough, you won't even hear its pitiful whimpering!!

Ace does his best suffering dolphin impression. Woodstock is no longer enjoying the band.

    CUT TO:

    INT. BASEMENT - NIGHT

Woodstock is at his computer. Ace looks over his shoulder. Finkle's Social Security information appears on the screen.

WOODSTOCK

This guy's last reported income was September, 1982.

ACE

Well then. We know he's incredibly thrifty.

WOODSTOCK

Is he?

    ACE

    Isn't he?

Woodstock types in more information. Finkle's TRW flashes on the screen.

WOODSTOCK

Well, I think we can be pretty sure he's involved in the kidnapping of the dolphin.

ACE

Really? What makes you say that?

    WOODSTOCK

    There's two-thousand dollars worth of smelts on his VISA card.

After a beat Ace realizes it was a bad joke.

    ACE

Please yank me no further. I beg of you.

    WOODSTOCK

Alright already. The last time this guy used his credit card was June, '84. He rented a car from Avis. And… eww… he was a bad boy. They found it abandoned two months later in South Miami.

ACE

Anything else?

    WOODSTOCK

    Nope.

        ACE

Well… you did all you could. Thanks for nothin.

                                            WOODSTOCK

    Hey man, according to this, your friend Ray Finkle doesn't exist.

ACE

Hmm, I know what that's like.

WOODSTOCK

Do you?

    ACE

    Don't I?

INT. TEA ROOM - NIGHT

Ace emerges from the basement. The band is between songs. Ace strolls by the burnout whose head has now stopped.

ACE

(to burnout)

Did you get all the spiders outta there?

    Ace heads out, then freezes. The two thugs that took Marino are standing at the exit. Then they see Ace and start towards him, reaching inside their coats.

    Suddenly the music starts. The burnout's head wails again. His manic gyrations interfere with the thugs long enough for Ace to bolt.

One of the thugs pushes the burnout violently against the wall as they pursue Ace.

BURNOUT

(calling, as he gets up)

Thanks, man! You're a great dancer!

Ace pushes his way through the crowd. The thugs follow.

    Ace nears the stage. It's wild. People are diving off and getting moshed.

Before the thugs grab him, Ace runs up and throws himself from the stage. The insane crowd begins to pass him around over their heads.

    The thugs exchange a look, then dive after Ace, and a "mosh" chase ensues.

    Ace is passed back onto the stage as the song comes to an end. The singer is lying there exhausted. Ace sees the crowd starting to put the thugs down, so he quickly grabs the microphone off the floor.

ACE

(screams)

ONE, TWO, THREE, FOUR, SPANK ME MOMMY!!!

    The audience looks at Ace for a second. Then the band members exchange a look and go for it!!

    It's a nightmarish little ditty. Ace sings like one of Satan's minions.

    ACE

URGHHUURRAAAW! ARGHUURRRREEEW!

    The crowd seems to understand. They throw the thugs high in the air again and mosh them away from the stage. The Thugs are shooting stray bullets the whole time.

    Ace incites the crowd, even more now, with a punching gesture. The crowd follows their new leader, punching with one hand, moshing with the other.

    The thugs get the living crap "moshed" out of them.

    When the song ends, Ace raises fists in the air. The cheering crowd violently drops the thugs. They're out cold.

EXT. TEA ROOM - NIGHT

Ace's car PEELS OUT and races by the parked '81 Ford Bronco.

    EXT. MELISSA'S APARTMENT - NIGHT

Ace's car skids to a halt. He hops out.

INT. MELISSA'S APARTMENT - NIGHT

There's a loud BANGING at the door. Melissa awakens, looks at the clock: 3:32 a.m. She drags herself to the door.

MELISSA

Who is it?

    ACE (O.S.)

    Ira.

        MELISSA

Ira who?

    ACE (O.S.)

    I refuse to do a 'knock knock joke'. Come on, open up!

    Melissa opens the door.

    MELISSA

Ace, what are you doing? It's the middle of the night!

ACE

You have to commit me.

    EXT. HIGHWAY - DAWN

Ace's clunker speeds down the highway.

ACE (V.O.)

Finkle escaped from Shady Acres in Tampa. They still have some of his stuff.

MELISSA (V.O.)

So you think they're going to let us just waltz in and look around?

EXT. SHADY ACRES - ESTABLISHING - DAY

A state hospital located on acres of green, manicured lawns.

    INT. SHADY ACRES - DAY

The reception area. A DOCTOR is before Melissa.

    DOCTOR

Mrs. Robinson? I'm Doctor Handly. Now who is it that you'd like to have us look at?

    MELISSA

    My brother… Eugene.

    ANGLE ON ACE - Looking like the football player who never wore a helmet.

    ACE

I'm ready to go in, Coach. Just give me a chance. I know there's a lot riding on it, but it's all psychological. Got to stay in a positive frame of mind. Memorize the play book. Study the films.

Ace strikes a dramatic pose and freezes, with a crazed look on his face.

ACE (CON'T)

I'm gonna execute a button-hook pattern!

He begins to make a play in slow motion.

ACE (CON'T)

Super slo-mo!

    CUT TO:

    EXT. SHADY ACRES HOSPITAL - DAY

Melissa walks with the Doctor. Patients are sitting around, doing outdoor therapy, etc.

    DOCTOR

You're brother won't be the first professional football player we've treated.

MELISSA

Is that right?

    DOCTOR

    Yes. We're very sensitive to the emotional stress athletes have to endure.

Ace runs across the b.g. screaming "I'm open! I'm open!"

DOCTOR

We'll have to do some preliminary evaluations, but I think your brother will fit in nicely here.

MELISSA

That's a relief, Doctor.

Ace takes a "snap" from a three-foot hedge and dives over it into the end zone. Melissa and the doctor stop to watch him.

    DOCTOR

He seems to have some difficulty letting go of the game. Has he had a long history of mental illness?

    MELISSA

    (truthfully)

    As long as I've known him.

Ace does a wild touchdown dance with some of the other patients participating.

    INT. SHADY GLADE ACRES - HALLWAY - DAY

The doctor is showing Melissa around. Ace is walking alongside them adjusting his imaginary shoulder pads.

    DOCTOR

This is our therapy room… Arts and crafts…

They turn a corner. Ace squats to pick the dirt out of his cleats.

DOCTOR (CON'T)

That's the storage room. This hallway leads to another recreational area –

Ace WHISTLES loudly and gestures like a referee…

ACE

HALFTIIIIME!!

    Ace sticks his head in the water fountain then sits down on the bench outside the storage room.

    MELISSA

He'll be fine by himself for the next twenty minutes.

DOCTOR

Well, why don't I show you the dormitories, then?

They leave Ace.

    After a beat, Ace gets up and does a quick spin pattern into the storage room door.

    INT. STORAGE ROOM - CONTINUOUS ACTION

Cartons everywhere. Ace does a quick search and locates several boxes maked FINKLE.

    Ace looks through the first couple of boxes and finds only clothes. In the third box, he hits the jackpot: He finds sicko arts and crafts dedicated to Marino. Die-Dan potholders, shredded Isotoner gloves. He opens a little diary. "Laces Out!" is insanely scrawled on every page.

    Ace finds a newspaper clipping, the headline reads:

    SEARCH CALLED OFF FOR MISSING HIKER

ACE

(reading)

A massive search ended today when rescue workers were unable to find the body of Lois Einhorn…

(stunned)

…a camper reported lost since Friday…

(to himself)

Lois Einhorn… holy shit balls.

    Ace sits bewildered.

    INT. POLICE STATION - DAY

The phone rings at Emilio's desk. He answers it.

EMILIO

Echavez.

    INT. SHADY ACRES - HALLWAY - DAY

Ace is on the phone. A CRAZY GUY is hovering nearby.

    ACE

This is Chicken Little. The sky is falling.

    EMILIO

What?

    BACK TO EMILIO

A beat as he listens to Ace's news.

EMILIO

I don't get it. What's it mean?

    INTERCUT ACE/EMILIO

ACE

It means she's involved in this. The article's dated the day before Finkle disappeared.

    EMILIO

Before who disappeared?

    ACE

    Finkle. Ray Finkle… the guy who took the dolphin? The guy you're supposed to be looking for?! Einhorn didn't tell you, did she?

    EMILIO

    Hey, Ace. I see where you're goin' with this and you're goin' alone.

    A Crazy Guy stands next to Ace now and begins mimicking everything he says.

    ACE

Come on, E. I tell her about Finkle, she doesn't tell a soul. I have an article here that connects her with Finkle. You gotta' check her out.

(to Crazy Guy mimicking)

Do you mind?

    The Crazy Guy stops and moves to one of the phones.

    EMILIO

Ace, I like my job. I get health insurance and benefits.

    CRAZY GUY

(into receiver)

I'm the Lindberg Baby. Come and get me.

ACE

Emilio, Einhorn is involved. You're gonna' have to make a decision here.

(beat)

Listen, I gotta get off the phone. I think I just solved the Lindberg case.

Melissa and the Doctor return.

DOCTOR

Well, look who's trying to use the phone.

Ace covers the phone receiver and whispers to them in a heartfelt voice.

    ACE

Brian Piccalo is dead.

    Ace breaks down. Melissa hangs up the phone and leads him away.

    We hear a thrash version of the theme to "Brian's Song" as they exit the hospital.

    INT. POLICE STATION - NIGHT

Emilio stands at a window, watching Einhorn drive off. The coast is clear so he sneaks into…

INT. EINHORN'S OFFICE - CONTINUOUS

He rifles through her file cabinet. He tears through papers. Then he looks in her desk.

    Stuffed in the back of the drawer he finds a personal note: We can make out the signature. Roger. He pockets it and walks out.

    EXT. MELISSA'S APARTMENT - NIGHT

Ace and Melissa pull up in the old heap.

    ACE

Good job today. You're quite a dirty rotten filthy liar.

MELISSA

(flattered)

Thanks. Are you sure you don't want to stay here with me?

ACE

Naw, I got some thinking to do. Besides, you'd be safer with Salman Rushdie

MELISSA

Okay.

    She gets out of the car, then turns and leans in the window.

    MELISSA

Listen… I know there isn't much time left. The game is tomorrow. But I know you've done your best. It's just an impossible situation. I don't expect..

ACE

Hey…

Ace leans over and kisses her.

ACE (CONT'D)

…bet on the Dolphins.

    INT. ACE'S APARTMENT - LATE NIGHT

CLOSE UP: ANSWERING MACHINE

Wiggles' nose enters frame and hits the play button.

MESSAGE #1

(Shickadance rasp)

Venturaaaa? Your time is up! You're out! You hear me?! No rent… no roof!

We widen to find Ace on the couch listening.

    MESSAGE #2

Ace, it's E. Got something you might find interesting. It's a note from Podacter to Einhorn, thanking her for a wonderful Saturday night. This is too weird, man?

    ACE

    Wiggles, rewind.

    Wiggles obediently hits another button and rewinds the phone tape. Ace pops sunflower seeds, and holds some evidence aloft thinking. A bird eats seeds out of his naval.

    ACE

What the hell does Lois Einhorn have to do with Ray Finkle? Come on, think!

    DISSOLVE TO:

    Later. Ace is posed like Rodin's "The Thinker".

ACE

Finkle and Einhorn. In it together. How? Why?

    A small monkey sits in the same position. Mocking Ace.

    DISSOLVE TO:

    Later still. Ace pacing, jumping up and down. Trying to get his intuitive juices flowing. The monkey is likewise, jumping on the mantle.

    ACE

Alright! Here we go! Answer's right there! Just gotta get some blood to the brain! Finkle and Einhorn! Finkle and Einhorn! Finkle and Einhorn! Finkle and Einhorn!

The animals all watch him like he's crazy.

DISSOLVE TO:

    Daybreak. Ace sits staring at a picture of Finkle on the coffee table. He's totally spent and on the verge of tears.

ACE

(whimpering)

Finkle and Einhorn. Einhorn and Finkle.

    He turns to see the monkey crashed out in a heap on a sofa pillow.

ACE

(to sleeping monkey)

Quitter.

    Wiggles jumps up onto the coffee table now. Ace can't be bothered with him.

ACE

What do you want? Huh?

    Wiggles whines at the tone of Ace's voice.

ACE (CONT'D)

What? I got no food for you. You gotta have money to buy food. I gotta find the dolphin to get the money. I don't see any dolphins around here, do you? Face it, it's hopeless… your master is a LOSER.

    Ace buries his face in his hands. His dog Wiggles does the same. Then Ace looks up again.

    ACE

LOO… HOO…

Suddenly he is silenced by something amazing.

    Wiggles' dark haired floppy ears are lying around Finkle's picture like a wig. Ace combs the hair over the head shot. The "make-over" is unmistakable. It's Einhorn!!

ACE

Oh, my god! That's it!

He jumps up, estatic.

    ACE

Einhorn is Finkle! Finkle is Einhorn!… Einhorn is a man!!!

    Ace's expression quickly turns sour.

ACE

OH MY GOD!!! EINHORN IS A MAN!!!

    MUSIC UP: AEROSMITH'S DUD LOOKS LIKE A LADY…

Ace makes a mad dash into the bathroom.

    INT. ACE'S BATHROOM - MORNING - QUICK CUTS

…Ace furiously brushes his teeth.

…Ace rinses with mouthwash, spits it out and gags.

…Ace is in the shower. He slowly curls up into a ball under the steaming water with an expression of horror on his face.

    INT. EINHORN'S HOUSE - DAY

CLOSE UP:

    A woman's leg being shaved.

Woman sexily putting on nylons.

    Woman hands squeezing perfume bulb.

    Woman's hand putting on AFC championship ring. One stone is missing.

EXT. EINHORN'S HOUSE - CONTINUOUS

Ace sticks wads of gum in his mouth while he watches Einhorn's house from his car.

ACE

(remembering)

You're gun is sticking into my hip. Yeeeekkkk!

Einhorn comes out her front door and gets into her car. Ace shudders once more and then follows her.

    EXT. MIAMI STREET - DAY

The road is jammed in one direction. Going towards the Super Bowl. Einhorn drives in the opposite direction. Out of town. Ace tails her at a safe distance, with his head out the window, of course.

    INT. BOBBY RIDDLE STADIUM - DAY

Various shots of crazy fans, piling into the stadium.

    INT. STADIUM OWNER'S BOX - DAY

Melissa, BOBBY RIDDLE, and GUESTS all amidst the usual pre-game hobnobbing. Most of the talk centers on the loss of Marino.

    Emilio, in full uniform, and a couple cops are providing extra security for the box.

    EXT. HIGHWAY ONE - DAY

Einhorn drives south out of town. The area's getting remote. Ace follows.

Einhorn turns down a deserted road and comes to…

EXT. INDUSTRIAL PLANT - DAY

A large, abandoned industrial facility. Einhorn parks, disappears inside…

A few beats later, Ace kills the engine and exits singing the score to "Mission Impossible".

    INT. INDUSTRIAL PLANT - DAY

Immense machines and swimming pool sized cauldrons.

    Ace cautiously makes his way through the desolate site, singing quietly now. He stops when he hears a familiar voice.

    JOHN MADDEN (O.S.)

I particularly like the match-ups of the defense.

    Ace sees a weird sight: A HUGE TV PROJECTION SCREEN tuned to the Super Bowl pre-game show. Marino is tied to a football tackling sled. The two thugs take turns running into Dan with their shoulders, driving him back five feet each time.

    JOHN MADDEN (ON TV)

…But the real story of this game is the absence of Dan Marino. Him being kidnapped and all has got to be a strain on this Miami team. I really feel sorry for those guys! I mean, it's hard enough enduring the pressure of the Super Bowl, without your star quarterback gettin' himself kidnapped. This is the whole ball of wax, folks! You wanna' get kidnapped, you do it in the off season!…

Marino looks incredulously at the screen. Next to him, Snowflake "watches" from a ground level cistern serving as an ad hoc tank.

    Ace sneaks closer.

    INT. BOBBY RIDDLE STADIUM - DAY

The crowd quiets as Jon Bon Jovi prepares to sing the National Anthem.

    Various shots of fans all standing at attention.

    In the owners box, Melissa looks to Emilio. Nothing's new.

INT. INDUSTRIAL PLANT - DAY

Einhorn is now in front of the big screen TV SINGING the National Anthem along with Bon Jovi. The thugs, VINNIE and ROC, are behind her standing at attention.

    The song ends. The crowd cheers.

    In a sultry fashion Einhorn circles Marino now.

    EINHORN

I just love Super Bowl Sunday, don't you, Dan? A magical afternoon where dreams are made… or crushed!

DAN

Look lady, if you want tickets, you're going about it in the wrong way.

EINHORN

Do I look familiar to you, Dan? Does it seem as if we've met someplace before?

DAN

I don't know… I get hit in the head a lot!

On the TV the ref makes an announcement.

    REF It's tails. The Eagles will receive.

Dan really struggles now.

    EINHORN

Oops. Looks like we're going to have to kick, Dan.

Einhorn steps behind a football set up on a tee. And in perfect sync with the kicker on TV, she boots a ball through a window of the warehouse.

    Marino doesn't know what to think.

EINHORN

I made some refreshments, Dan. Would you like some refreshments, Dan? I'll be right back, Daaaan!!

She goes. Dan struggles, but to no avail.

    MARINO

Look, I don't know how much psycho woman is paying you guys, but I can double it.

VINNIE

Sorry, Danny boy. Psycho woman keeps us out of prison.

    Vinnie grabs a feeder fish and entices Snowflake to the surface. Roc raises a football.

    ROC Hey, Marino, check it out. I'm throwin' passes to a Dolphin!

    He chucks the ball and hits Snowflake, hard. The thugs both laugh hysterically.

    Snowflake makes an angry leap and drenches the thugs. Snowflake laughs now, the thugs are furious.

    VINNIE

Get some more fish!

    INT. BEHIND MACHINERY - CONTINUOUS

Roc walks behind a big piece of machinery, reaches down for the pail of smelts, but sees nothing.

    ROC Where the hell's the smelts?

He stands up straight and we all hear that familiar "Pop" of a sunflower seed being cracked open.

    Roc's eyes widen. He turns and sees…

Ace coyly smiles at him, blows the sunflower seed shells into his face and CLANG! He whacks Roc in the head with a pail full of fish.

ACE

(doing Brando)

He sleeps with the fishes.

    INT. INDUSTRIAL PLANT - CONTINUOUS

VINNIE

Hey Roc, what the hell was that?

    Vinnie cocks his gun and goes to check out the sound.

    INT. BEHIND MACHINERY - CONTINUOUS

Vinnie rounds the corner and sees nothing. He walks a little further and notices a trail of smelts lined up on the ground.

    He follows the trail around a corner and we see Roc, unconscious but moaning. He is sitting against the ground, with his legs spread apart and the pail over his head. The trail of smelts leads to his crotch. There is one halfway into his zipper, with its tail flipping.

    Vinnie takes in this sight, then rushes over to Roc and stands him up.

    VINNIE

Hey man! What happened? What's goin on…?

We see Ace at the top of a giant machine. He is aiming a 200 pound steel hook, that hangs on a chain from the ceiling.

    ACE

Guess what, boys, it's nap time.

Ace gently releases the hook. Just as Vinnie and Roc turn to look, the iron hook shears both of their heads clean off.

    Two headless bodies fall to the ground in slow motion with blood gushing from their necks.

    CLOSE ON ACE - HORRIFIED

ACE

Hooooly Shiiit! Oh my god! I didn't mean to - Oh man!!!

Ace holds his head and dances around, completely freaking out what he had done.

ACE

(looking to God)

Lord, I swear! I just wanted to knock them out!

    Ace abruptly stops to think.

    ACE

Is that murder? I don't know. They were gonna kill me. But they didn't… But they tried. That's self defense. That's it!! I have nothing to worry about!!

    CUT TO:

    Ace nervously whistling as he wipes his fingerprints off the hook.

    INT. IRONWORKS FACTORY - FACTORY

Ace checks on Snowflake then goes to Marino. He signals for Dan to keep quiet, then starts to untie him.

MARINO

(whispers)

Who are you?

    ACE

    (whispers)

    Ace Ventura. Pet detective. I've been sent in with a special play.

(whispers)

Quarterback sneak.

    WE HEAR THE CLICK OF A GUN.

EINHORN (O.S.)

Penalty. Too many men on the field.

    Ace turns. Einhorn's holding a gun on them from the other side of Snowflake's tank.

EINHORN (CON'T)

I warned you, Ventura.

    ACE

What happened to "Ace"?

    EINHORN

    Good question.

    She pulls out a cellular phone and dials.

    ACE

Be careful with that phone, lieutenant. I wouldn't want you to get a tumor.

EINHORN

(into phone)

Sergeant Aguado, it's Lt. Einhorn. Get some men over to the old ironworks factory on Victoria Road. I've got the kidnapper trapped in the warehouse. It's Ace Ventura. He's killed Marino and Snowflake.

    Einhorn smiles as she puts the phone away.

    EINHORN

Vinnie! Roc! Get in here!

    Ace gets a very guilty look.

    ACE

What? Who are they? You mean there's other people here?

EXT. POLICE STATION - DAY

A battalion of cop cars screech away as we hear…

RADIO DISPATCHER

(V.O.)

Attention all units. Code 11 in progress at 343 Victorville Road. Officer needs back-up…

INT. BOBBY RIDDLE STADIUM OWNER'S BOX - DAY

The cops and Emilio listen to their ear pieces…

RADIO DISPATCHER

(V.O.)

…Suspect's name: Ace Ventura, male Caucasian, he is armed and dangerous…

Emilio nudges Melissa.

    EMILIO

It's Ace. Let's go.

    INT. HALLWAY - CONTINUOUS

Emilio high tails it out of there. Dodging concession stand patrons, bathroom lines, etc… Melissa runs behind, trying to catch up.

    MELISSA

Emilio, is he in trouble?

    EMILIO

    Don't worry, there's nothing Ace can't handle!

INT. IRONWORKS FACTORY - DAY

Einhorn cocks her gun. Ace's face is glistening with tears. He's a complete wreck.

    ACE

Don't kill meeee!! Pleeheeheeheeheeeezzz!!! I'll never tell anyone! I swear!

    (indicating Marino)

He's the one you want!! Kill him!!

MARINO

(indicating Ace)

No… kill him!

    The two argue. Einhorn fires a shot in the air to stop them.

    EINHORN

No, I'm gonna kill the dolphin first.

(to Ace)

I wouldn't want you to miss that.

Einhorn walks to the edge of the tank. She aims the gun at Snowflake and FIRES!

    We see the bullet miss Snowflake under water.

    Snowflake swims wildly. She FIRES again! Misses again. Suddenly, Ace HOLLERS!

    ACE

Blue forty-two!!

    Einhorn turns to Ace.

    EINHORN

SHUT UP!!

    ACE

BLUE FORTY-TWO!

    Einhorn shoots at Ace! He dives out of the way.

    ACE

HUT! HUT!

    Suddenly, Snowflake leaps out of the water and takes the gun out of Einhorn's hand, like the trick we saw earlier. Snowflake swims around the pool with the gun in his mouth.

ACE

(smug)

Yes. The highly trained dolphin. Perhaps the smartest mammal in the animal kingdom. See how he knew exactly what I wanted him to do, as if our minds were somehow in complete synchronization. They have been know to save men at sea you know. They have their own language.

(to Snowflake)

Snowflake. Come here, Snowflake! Bring me the gun!

    (makes dolphin sounds)

EEEEEE! EEEEEE! EEEEEE!

    Just like the trick in his routine, however, Snowflake swims around the tank, passes Ace, then hands the gun back to Einhorn. He finishes with a tail walk.

ACE

(under his breath)

Stupid fish.

    ON TV: Miami's kicker boots a perfect field goal from fifty yards.

JOHN MADDEN

He got all of his leg into that one!

    The field goal kicker is hugged by his teammates.

    ACE

Good to see someone who doesn't buckle under the pressure?

MARINO

Yeah, not like in 82 when we choked…

Einhorn walks to Ace and puts the gun against his head.

    EINHORN

What would you know about pressure?

    ACE

    Well, I've kissed a man.

JOHN MADDEN (ON TV)

Of course, there's never been a more crucial kick than the famous Kick heard 'round the world…

The famous footage airs on TV. They all turn to watch.

    JOHN MADDEN

…I mean, it's clear to me that it was a good hold. Finkle just booted it.

EINHORN

The laces weren't out. THE LACES WEREN'T OUT!!

    Einhorn takes a shot at the screen, creating a hole in Madden's forehead. Ace uses the moment to smack the gun out of her hand.

A HUGE, NO-HOLDS-BARRED FIGHT ensues. Ace and Einhorn punch each other about the face and stomach.

    Einhorn throws a punch at Ace. Ace goes down.

    Einhorn goes for the loose gun. Ace leaps and tackles her.

    They both crash into old rusty equipment, raising a mountain of dust. Marino struggles all the while trying to get free.

    Einhorn kicks Ace. He flies into Marino.

    MARINO

Having a little trouble with the lady, Ace?

    ACE

    (out of breath)

You don't understand, she's a –

Einhorn grabs Ace, throws him into a head lock and begins wailing on his face.

    Meanwhile, cops start arriving, SWAT team members disperse onto the catwalk as the fight continues. They try but can't get a bead on Ace as the two roll around on the floor.

More punches. They fight up a flight of stairs, then back down. To the amazement of the SWAT team, Ace and Einhorn slug it out as equals.

AGUADO

(caught up)

Get him, Lois!

    Now they crash through a plate glass window together. Ace gets to his knees first and wobbles toward the gun. It's the first clear shot the SWAT team has had.

EINHORN

(screaming)

Shoot him! Shoot him!

    We all hear the guns cocked. We see Ace in the rifle sights. We see fingers twitch on triggers.

    A loud voice comes from off camera.

    EMILIO

DON'T SHOOT! HOLD YOUR FIRE!

Melissa is holding Emilio's gun under his chin.

MELISSA

Put down your guns or this cop gets it!

    The SWAT team hesitates.

MELISSA (CONT'D)

I mean it!!

    Much to Emilio's surprise, she cocks the gun.

EMILIO

(whispers to Melissa)

Ah… Melissa? That's a hair trigger.

(loud to cops)

She's not joking!

The SWAT team leader signals his men. They lower their guns. Einhorn gets back to her feet.

    EINHORN

He kidnapped Snowflake. He killed Roger Podacter, and he was about to kill Dan Marino and me!

    ACE

Ho, ho! Fiction can be fun! But I find the reference section much more enlightening.

(doing his best Clarence Darrow)

For instance, if you were to look up 'professional football's all time bonehead plays', you might read about a Miami Dolphin kicker named Ray Finkle, who missed a twenty-six yard field goal in the closing seconds of Super Bowl Seventeen.

(in one breath)

What you wouldn't read about is how Ray Finkle lost his mind, and was committed to a mental institute, only to escape and join the police force under the assumed identity of a missing hker, seducing her way to the top, in a diabolical plan to get even with Dan Marino whom he blamed for the entire thing!!!

Ace gasps for air. Everyone is totally confused.

    AGUADO

What the hell are you trying to say?

    ACE

    She's not Lois Einhorn! She's Ray Finkle! She's a man!

EINHORN

He's lying! Shoot him!

Ace walks over to her.

    ACE

Let's just see who's lying. Would a real woman have to wear one of these?

    Ace dramatically pulls at Einhorn's hair, thinking it's a wig. Einhorn's head flies back. The hair is real. Ace keeps tugging it.

The SWAT team ready themselves.

ACE (CONT'D)

Boy, that's really on there! But tell me this: Would a real woman be missing these?!

Ace rips open Einhorn's blouse, and reveals two beautiful feminine breasts.

The sharp shooters are tensing. Ace is laughing nervously now.

    ACE

Ha, ha, ha! That kind of surgery can be done over the weekend! But I doubt if she could find the time during her busy schedule to get rid of Mr. Knish!!

    Ace rips off Einhorn's skirt. Einhorn now stands there fully nude. She appears to be the perfect figure of a woman.

ACE

Oooh boy.

    Ace looks at Melissa and Emilio and shrugs his shoulders. Then, just when it seems all is lost, Dan Marino who is back behind Einhorn, motions for Ace to come over.

    MARINO

Psst… Ace. Come here.

ACE

(to everyone)

Could you excuse me just a second.

    Ace goes to Dan. Melissa still holds Emilio hostage.

    EINHORN

Shoot him. Shoot him, now!!

    MELISSA

    (to cops)

Don't anybody make a move!

Marino whispers something in his ear. Ace looks confident again. He once more addresses the crowd.

    ACE

Ladies and gentlemen, my esteemed colleague Mr. Marino, has just brought some new evidence to my attention. Now, history has certainly shown that even the most intuitive criminal minds can be wrong, from time to time. But, if I have been mistaken… if the lieutenant is indeed a woman… then my friends, she is suffering from the worst case of hemorrhoids I have ever seen!!!

    Ace spins Einhorn around now, exposing to the world, the healthy set of male genetalia that Finkle has learned to keep tucked between his legs. (And if we have any balls, we'll actually show it.)

Everyone gasps. CLOSE UP ON EINHORN/FINKLE. He finally drops the facade.

FINKLE

(deepest voice possible)

It was Marino's fault. The laces were in.

(breaking down now)

They were IN!!!

    Quick cuts of all the cops spitting with disgust. Then Emilio spits.

    Then CLOSE ON Marino spitting. They all have kissed her/him/it. Even Snowflake blows his spout.

    Ace confidently cracks a sunflower seed.

    ACE

Somebody read it its rights.

    Suddenly, Finkle picks up a shard of broken glass and lunges at Ace.

    FINKLE

DIE ANIMAL BOYYYYY!!!

    Thinking fast Ace sidesteps Finkle and sends him head first into Snowflake's makeshift tank. After a few seconds Finkle fights his way to the surface and thrashes around, helplessly.

FINKLE

(gasping for air)

Help I can't swim!!!

Finkle goes under again. We see him under water sinking down.

    Snowflake swims to him now, allowing him to grab onto his fin and pulls Finkle gently to the side of the pool. Finkle lies there exhausted.

    Ace reaches down into frame, removing the '82 AFC Championship ring from Finkle's finger. We see that it's the ring with the missing stone. Ace replaces it with the stone in his pocket. It's a perfect fit.

    ACE

LLLOOOSER! LLOO HOO SERR HERR HERR!!!

    Melissa is still holding the gun on Emilio.

    EMILIO

Melissa… you can give me back my gun now.

    Melissa has forgotten she even had the gun. She hands it to Emilio and faints in his arms.

    Now Aguado appears beside Ace.

    AGUADO

I don't know how you did it, Ventura… but that was damn good police work. Alright guys, let's wrap this up!

    EXT. HIGHWAY - DAY

Twenty or more police cars in single file provide more than ample escort for…

…Ace and Marino in Ace's Chevy Bel-Aire with the cracked windshield. Both of them have their heads sticking out so that they can see. Marino has a wad of gum in his mouth.

HIGH ANGLE

The long line of flashing lights and cop cars drives at top speed up Route One. Ace's Bel-Aire right in the middle.

MARINO (O.S.)

hey Ace?

    ACE (O.S.)

    Yeah, Dan?

    MARINO (O.S.)

    Got any more gum?

    CUT TO:

INT. STADIUM - DAY

The Super Bowl Halftime Show is in progress. Marino is in uniform warming up. Emilio is drooling at the cheerleaders. Ace and Melissa are standing near the fifty yard line taking in the awesome spectacle.

    Some fireworks go off around the tank. A marching band plays a triumphant tune. We see a helicopter come up over the side of the stadium carrying Snowflake.

ANNOUNCER (O.S.)

Ladies and gentlemen, the Miami Dolphins are proud to welcome back to BOBBY RIDDLE Stadium, our beloved mascot and star of the halftime show…

ANGLE ON

The helicopter lowering Snowflake into his tank.

ANNOUNCER (O.S.)

Snowflake!!

    As the crowd roars, Melissa turns to Ace, and with Snowflake in the background performing spectacular flips, they kiss.

    ANOTHER ANGLE

As Melissa and Ace kiss, the prized 'White Pigeon' lands on a Gatorade dispenser in the foreground. Ace spots it and starts to make a move.

    Just as he closes in for the grab, the Philadelphia Eagles mascot eagle walks up to get a drink and shoos the pigeon away. Ace is furious.

    ACE

You idiot! Do you know what you've done?!

The giant eagle head looks up at Ace.

    MASCOT

Huh?

    Ace grabs him.

    ACE

You just cost me ten thousand bucks, Polly!

    MASCOT

Yeah Blow me.

    ACE

REE HEE HEE HEELYYY?!!!

    PULL BACK to find Eagle's mascot and Ace arguing. We can't hear what's said, but there's a lot of finger pointing.

    Emilio stops his leering to check out what's going on.

The ANNOUNCER up in the booth reads a release.

    ANNOUNCER

The National Football League would now like to offer a special thank you to the man who rescued Dan Marino and our beloved Snowflake…

On the field the mascot shoves Ace. Ace shoves back.

ANNOUNCER (CONT'D)

A great humanitarian, and lover of all animals… Mr. Ace Ventura!

    Ace is straddling the eagle, pounding the shit out of giant head.

    The image is flashed on the big stadium screen. We freeze frame on this huge picture of Ace, as he looks into camera with his fist raised.

    MUSIC UP: THRASH METAL

ROLL CREDITS

THE END`

sendScript(content)
    .then(e => console.log(` Enviado ☄️, ${e} mensajes enviados 👉🏻💥💃🏻`)).catch(console.error)
