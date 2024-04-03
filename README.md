# Coffee Payment Scheduler

## The Story

At Bertram Labs, Bob, Jeremy, and their five coworkers love their daily coffee ritual. Every day, right after lunch, they head to their favorite coffee shop for a cup to go. Bob prefers cappuccino, Jeremy opts for black coffee, and the others have their unique favorites. To simplify the checkout process, only one coworker pays for all the coffees each day. However, this leads to a recurring dilemma: whose turn is it to pay for coffee?

## The Challenge

This software program is designed to help the coworkers at Bertram Labs decide who should pay for coffee each day. It takes into account that not all drinks cost the same, ensuring a fair rotation.

## Requirements

    Programming Language: Any
    Interface: Any (GUI, CLI, etc.)
    The solution must be published on GitHub.

## How to Build and Run locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/coffee-payment-scheduler.git
```

2. Navigate to the project directory:

```
cd bertram
```

3. Compile and run the program

```bash
npm install && npm run dev
```

## Deployment

Or you can visit here to see the app live.

## How to Enter Data

Looking at the story and the problem, the problem wasn't adding coworkers or coffee to the menu, the problem was figuring out who was paying. I hard coded the employees and the menu.

## Assumptions

I don't need to figure out who orders what because we only want to know who pays.

## Future Work

1. Make the data persistance.
2. Add feature to add employee
3. Add feature to add menu items
4. Testing. Currently I don't have any test but I would add e2e and integration testing.
