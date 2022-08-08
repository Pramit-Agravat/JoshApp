Feature: Email Account Login 

    Scenario: User navigates to Phonenumber Log In
        Given I am a User attempting to Log In with a Phone number
        When I navigate to the Log In Screen
        Then I can select Log In with Social Media Account
        And I can select the Log In button with out errors
        And I can enter a Phone number with out errors
        And I can leave the screen with out errors

   


   
