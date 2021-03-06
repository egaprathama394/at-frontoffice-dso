Feature: Order Dealer

   Scenario Outline: Admin try to see List of Orders
      Given login Frontoffice as admin "Outlet Dealer1"
      When admin try to access "<order>" by menu sidebar
      Then admin "Outlet Dealer1" can see list of order "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |
| All Order |

   Scenario Outline: Admin try to see Detail of Orders
      Given login Frontoffice as admin "Outlet Dealer1"
      Given at "<order>" Page
      When admin "Outlet Dealer1" try to see detail of orders "<order>"
      Then admin can see detail of order "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |

   Scenario Outline: Admin try to see Detail of All Orders
      Given login Frontoffice as admin "Outlet Dealer1"
      Given at "All Order" Page
      When admin try to see detail orders "<order>" from all page
      Then admin can see detail "<order>" from all order page
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |

   Scenario Outline: Check Dropdown Status
      Given login Frontoffice as admin "Outlet Dealer1"
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
      Given login Frontoffice as admin "Outlet Dealer1"
      Given at "<order>" Page
      Given at detail order "<order>"
      When admin try to change status order "<order>"
      Then admin "Outlet Dealer1" can see status of order "<order>" has been changed
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |