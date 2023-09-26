---
toc: True
comments: True
layout: post
title: Java Testing
courses: {'csa': {'week': 0}}
description: Trying out Java with Hello World
type: hacks
---

## Hello World (Adapted Mort Version)


```Java
// Define 'BruhObject' Object
public class BruhObject {
    // Create a String variable, 'bruh'
    private String bruh;

    // Construct bruh
    public BruhObject() {
        bruh = "Sample text";
    }

    // Method to return the 'bruh' variable
    public String getBruh() {
        return this.bruh;
    }

    // Method that prints 'bruh' variable
    public static void main(String[] args) { // Uses void because it does not return anything, but rather prints
        BruhObject test = new BruhObject();
        System.out.println(test.getBruh());
    }
}

BruhObject.main(null);
```

    Sample text


## Hello World (Aiden Version)


```Java
System.out.println("test")
```

    test


## Simple Coinflip Object


```Java
import java.lang.Math;

public class coin {
    // Define variables for which side the coin is on, and counters for each
    private String face;
    private int headCount;
    private int tailCount;
    private int sideCount;

    // Constructor
    public coin() {
        face = "";
        headCount = 0;
        tailCount = 0;
        sideCount = 0;
    }

    // Flip method
    public String flip() {
        // Get random double from 0 to 1
        double roll = Math.random();

        // Determine heads, tails, or neither, with even odds on heads and tails, then add count.
        if (roll > 0.5) {
            face = "heads";
            headCount += 1;
        }

        else if (roll < 0.5){
            face = "tails";
            tailCount += 1;
        }

        else {
            face = "neither!";
            sideCount += 1;
        }

        return face;
    }

    // Method that calculates percent of flips that resulted in a side
    public String calculatePercent(float num, float occurrences) {
        return 100 * (occurrences / num) + "%";
    }

    // Main method
    public void multiFlip(int num) {
    System.out.println("\nFlips:");

        // For lop to flip as many times as inputted
        for (int i = 0; i < num; i++) {
            System.out.println(this.flip());
        }

        System.out.println("\nPercentages:");
        System.out.println("Heads: " + this.calculatePercent(num, headCount));
        System.out.println("Tails: " + this.calculatePercent(num, tailCount));
        System.out.println("Sides: " + this.calculatePercent(num, sideCount));

    }
}

// Change this to determine flips.
public int flips = 10;

coin quarter = new coin();

quarter.multiFlip(flips);
```

    
    Flips:
    heads
    tails
    heads
    tails
    heads
    heads
    tails
    heads
    tails
    tails
    
    Percentages:
    Heads: 50.0%
    Tails: 50.0%
    Sides: 0.0%

