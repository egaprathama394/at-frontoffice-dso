Feature: Advance Search Order Dealer

    Scenario Outline: Admin try to see Advance Search
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "<order>" Page
    When admin try to see advance search "<order>"
    Then admin can see advance search "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |
| All Order |

    Scenario Outline: Admin try to see Result of Advance Search
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "<order>" Page
    When admin "Outlet Dealer1" try to see result of advance search "<order>"
    Then admin "Outlet Dealer1" can see result of advance search "<order>"
Examples:
| order |
| Request To Buy |
| Request Test Drive |
| Order Service |
| All Order |

    Scenario Outline: Admin try to search invalid data all order
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "All Order" Page
    When admin try to search invalid data "<field>"
    Then admin can see notification no data
Examples:
| field |
| Tanggal Order |
| Nomor Order |
| Customer Name |

    Scenario Outline: Admin try to search invalid data request to buy
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "Request To Buy" Page
    When admin try to search invalid data "<field>"
    Then admin can see notification no data
Examples:
| field |
| Tanggal Order |
| Nomor Order |
| Customer Name |

    Scenario Outline: Admin try to search invalid data request test drive
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "Request Test Drive" Page
    When admin try to search invalid data "<field>"
    Then admin can see notification no data
Examples:
| field |
| Tanggal Order |
| Tanggal Drive |
| Nomor Order |
| Customer Name |

    Scenario Outline: Admin try to search invalid data request booking service
    Given login Frontoffice as admin "Outlet Dealer1"
    Given at "Order Service" Page
    When admin try to search invalid data "<field>"
    Then admin can see notification no data
Examples:
| field |
| Tanggal Order |
| Tanggal Service |
| Nomor Order |
| Customer Name |