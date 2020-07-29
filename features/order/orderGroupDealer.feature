Feature: Order Group Dealer

   Scenario Outline: Admin try to see List of Orders
      Given login Frontoffice as admin "Group Dealer"
      When admin try to access "<order>" by menu sidebar
      Then admin "Group Dealer" can see list of order "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |
| All Order|

   Scenario Outline: Admin try to see Detail of Orders
      Given login Frontoffice as admin "Group Dealer"
      Given at "<order>" Page
      When admin "Group Dealer" try to see detail of orders "<order>"
      Then admin can see detail of order "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |

   Scenario Outline: Admin try to see Detail of All Orders
      Given login Frontoffice as admin "Group Dealer"
      Given at "All Order" Page
      When admin try to see detail orders "<order>" from all page
      Then admin can see detail "<order>" from all order page
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |

   Scenario Outline: Check Dropdown Status
      Given login Frontoffice as admin "Group Dealer"
      Given at "<order>" Page
      Given at detail order "<order>"
      When admin try to see dropdown of status "<order>"
      Then admin can see list status of order for "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |

   Scenario Outline: Admin try to change status order
      Given login Frontoffice as admin "Group Dealer"
      Given at "<order>" Page
      Given at detail order "<order>"
      When admin try to change status order "<order>"
      Then admin "Group Dealer" can see status of order "<order>" has been changed
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service  |