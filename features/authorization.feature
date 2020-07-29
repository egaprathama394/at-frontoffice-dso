Feature: Authorization Admin FrontOffice

    Scenario Outline: Check all menu for authorization
    Given login Frontoffice as admin "<auth>"
    Then admin can see menu for authorization "<auth>"
Examples:
| auth |
| HO |
| Outlet DSO1 |
| Outlet Dealer1 |
| DealerGroup |
