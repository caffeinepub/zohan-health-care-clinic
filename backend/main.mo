import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form types and storage
  public type ContactFormSubmission = {
    timestamp : Time.Time;
    name : Text;
    phone : Text;
    email : ?Text;
    message : Text;
  };

  // Persistent storage for submissions
  var submissions : [ContactFormSubmission] = [];

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : ?Text, message : Text) : async () {
    // Validate required fields
    if (name.size() == 0 or phone.size() == 0 or message.size() == 0) {
      Runtime.trap("Invalid input: name, phone, and message are required");
    };

    let newSubmission : ContactFormSubmission = {
      timestamp = Time.now();
      name;
      phone;
      email;
      message;
    };

    // Concatenate to persistent array
    submissions := submissions.concat([newSubmission]);
  };

  // Admin-only endpoint to retrieve contact form submissions
  public query ({ caller }) func getContactFormSubmissions() : async [ContactFormSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view contact form submissions");
    };
    submissions;
  };
};
