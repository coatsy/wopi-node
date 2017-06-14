# wopi-node
Sample WOPI Host implementation in node.js

## Introduction
This repository contains an application that integrates with Office Online for viewing/editing Office documents. This type of integration classifies this application as a WOPI host. WOPI (Web Application Open Platform Interface) is a protocol for integrating with Office Online and is documented in detail at [https://wopi.readthedocs.org](https://wopi.readthedocs.org "https://wopi.readthedocs.org"). This sample will illustrate many important patterns and practices for implementing a WOPI host, a number of which are outlined in this readme. 

## Structure
The inspiration for the structure of this sample came from the excellent [TypeScript Node Starter Project](https://github.com/Microsoft/TypeScript-Node-Starter) and the C# WOPI Host reference implementation [PnP-WOPI](https://github.com/OfficeDev/PnP-WOPI)
