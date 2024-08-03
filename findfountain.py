#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug  3 02:55:54 2024

@author: James
"""

import requests
import pymongo
from pymongo import MongoClient
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import urllib.parse
from urllib.parse import quote_plus

import sys
import time
import datetime

password = quote_plus('@2ca282vfm')

uri = "mongodb+srv://achoyy:" + password + "@hackthe6ix2024.srfuxtl.mongodb.net/?retryWrites=true&w=majority&appName=HackThe6ix2024"

client = MongoClient(uri)



#supporting functions

#creates timestamp
def timestamp():
    time_now = time.time()
    return time_now

#calculates distance between ordered pairs of coordinates
def distance(coords1, coords2):
    difference = ((coords1[0]-coords2[0])**2 + (coords1[1]-coords2[1])**2)**(1/2)
    return difference


#app functions

#creates new user profile
def create_profile(user_name:str):
    
    #check if name already exists, if yes return error message
    
    my_user = {}
    
    my_user['name'] = user_name
    my_user['karma'] = 0
    my_user['jointime'] = time.time()
    
    collection_users = client['mydb']['users']
    collection_users.insert_one(my_user)
    
#creates new location at given coordinates
def create_location(location_name: str, category: str, coords, vote: bool(), user_name: str, review: str):
    my_location = {}
    
    my_location['name'] = location_name
    my_location['category'] = category
    my_location['coords'] = coords
       
    if vote == True:
        up_votes = 1
        down_votes = 0
    else:
        up_votes = 0
        down_votes = 1
        
    my_location['status'] = {'upvotes': up_votes, 'downvotes': down_votes, 'netvotes': up_votes - down_votes}
    
    time = timestamp()
    this_visit = {'user': user_name, 'time': time, 'review': review}
    my_location['visit']: [this_visit]
        
    collection_locations = client['mydb']['locations']
    collection_locations.insert_one(my_location)
    
    collection_users = client['mydb']['users']
    collection_users.find_one({name: user_name})
    
    
    my_user = collection_users.find_one({name: user_name})
    my_user['karma'] += 1
    
    collection_users.update_one({name: user_name}, my_user)

#tags location for given coordinates
def tag_location(user_name: str, vote: bool(), coords, review: str):
    
    collection_locations = client['mydb']['locations']
    my_location = collection_locations.find_one({'coords': coords})
    
    up_votes = my_location['status']['upvotes']
    down_votes = my_location['status']['downvotes']
    
    if vote == True:
        up_votes += 1
    else:
        down_votes += 1
        
    my_location['status'] = {'upvotes': up_votes, 'downvotes': down_votes, 'netvotes': up_votes - down_votes}
    
    time = timestamp()
    this_visit = {'user': user_name, 'time': time, 'review': review}
    my_location['visit'].append(this_visit)
    
    collection_locations.update_one({'coords': coords}, my_location)
    
    my_user = collection_users.find_one({name: user_name})
    my_user['karma'] += 1
    
    collection_users.update_one({name: user_name}, my_user)
    
#fetches location data at given coordinates
def fetch_location(coords: str):
    
    collection_locations = client['mydb']['locations']
    my_location = collection_locations.find_one({'coords': coords})
    
    location_name = my_location['name']
    up_votes = my_location['status']['upvotes']
    down_votes = up_votes = my_location['status']['downvotes']
    
    #True for functional, False for nonfunctional
    if my_location['status']['netvotes'] >= 0:
        status = True
    else:
        status = False
    
    visits = my_location['visit']
    
    return (location_name, up_votes, down_votes, status, visits)

#calculates nearest location to user
def nearest_location(user_coords, category):
    
    #fetch all locations of given category
    


    

    

    
    
    
    
    
    
    
    