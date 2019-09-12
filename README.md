# autoZy Chrome Plugin
A chrome plugin which does most of the ZyBooks work for you.

## What Works?
So far it can
* Solve the animations
* Solve multiple choice
* Solve the short answer questions

# Installation
This plugin is not in the chrome store so you will have to install it manually -- which is not hard.
0- Clone or download this repo.

1- Head to chrome://extensions/

2- Turn on developer mode.

3- Load unpacked and select the root folder of the plugin.


# Big Brother
I decided to not track usage for the plugin. It's completly local and it stays that way. The plugin does not log your online behavior and is only activated on ZyBooks domains.

# How It Works?
## Animation
It starts the animation on double speed, skips through the animation automatically.

## Multiple choice
It selects all the answers and since the correct answer is in it too, the webpage will mark it as completed.
![](https://i.imgur.com/n34mHus.gif)


## Short Answer (Experimental) 
It copies all the answers into the boxes but requires the users to tab in the box of then answer first then click check. I tried to make it work out of the box but it looks like it's a chrome-plugin limitation. I got the code to work outside of the plugin. So for now we're gonna have to live with it until I figure out a different solution.


# Debugging

The plugin shows "AutoZy Loaded" in console once it loads. To open console, open developer tools and select console. If you run into any problems, feel free fo submit an issue. 


# Disclaimer 
I built this as a proof of concept. Please do your homework to make the most out of your class.
THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, ACADEMIC INTEGRITY VIOLATIONS, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

